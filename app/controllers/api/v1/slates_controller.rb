module Api
  module V1
    class SlatesController < Api::V1::ApiBaseController
      def index
        start_time = DateTime.parse(params[:slate][:start_time])

        expose Slate.where(
          'start_time > ? AND start_time < ?',
          start_time.beginning_of_day,
          start_time.end_of_day
        ), each_serializer: ::Slates::ShowSerializer
      end

      def create
        data = { jid: ::Slates::Admin::ImportWorker.perform_async(params[:slate]) }
        expose data
      end
    end
  end
end