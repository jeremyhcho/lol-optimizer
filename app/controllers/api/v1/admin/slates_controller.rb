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
            jid: ::Slates::Admin::ImportWorker.perform_async(params[:slate])
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
            with_players: true,
            with_teams: true
          }
        end

        def load_slate
          @slate ||= ::Slate.find(params[:id])
          error! :bad_request unless @slate
        end

        def from_date
          @from_date ||=
            Date.parse(params[:from])
                .beginning_of_day
        end

        def to_date
          @to_date ||=
            Date.parse(params[:to])
                .end_of_day
        end
      end
    end
  end
end