module Api
  module V1
    module Admin
      class SlatesController < Api::V1::ApiBaseController
        before_action :load_slate, only: [:show, :update, :destroy]

        def index
          expose ::Slate.from_date(from_date).to_date(to_date),
                 each_serializer: ::Slates::ShowSerializer
        end

        def show
          expose ::Slates::ShowSerializer.new(@slate, _show_options)
            .serializable_hash
        end

        def create
          resp = {
            jid: ::Admin::Slates::ImportWorker.perform_async(_create_opts)
          }

          expose resp
        end

        def update
          @slate.assign_attributes(update_params)

          if @slate.save
            expose ::Slates::ShowSerializer.new(@slate).serializable_hash
          else
            error! :invalid_resource, @slate.errors
          end
        end

        def destroy
          if @slate.destroy
            expose basic_success_message
          else
            error! :invalid_resource, @slate.errors
          end
        end

        private

        def update_params
          params.require(:slate).permit(:name)
        end

        def _show_options
          {
            with_players: params[:with_players],
            with_teams: params[:with_teams]
          }
        end

        def load_slate
          @slate ||= ::Slate.find(params[:id])
          error! :bad_request unless @slate
        end

        def from_date
          @from_date ||=
            DateTime.parse(params[:from])
                .beginning_of_day
                .utc
        end

        def to_date
          @to_date ||=
            DateTime.parse(params[:to])
                .end_of_day
                .utc
        end

        def _create_opts
          {
            csv_url: params[:csv_url],
            name: params[:name],
            start_time: converted_start_time,
            user_id: current_user.id
          }
        end

        def converted_start_time
          start_date = DateTime.parse(params[:start_date])
          start_time = DateTime.parse(params[:start_time])

          start_date.change(
            hour: start_time.hour,
            min: start_time.minute,
            sec: 0
          ).utc
        end
      end
    end
  end
end
