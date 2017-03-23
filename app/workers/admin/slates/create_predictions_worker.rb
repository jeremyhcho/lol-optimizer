module Admin
  module Slates
    class CreatePredictionsWorker < BaseWorker
      include Notifiable

      sidekiq_options queue: :upload_slate_csv, retry: false

      def perform(slate_id, user_id)
        payload = Admin::Slates::CreatePredictions.new(slate_id).perform

        notify_user!(user_id, payload)
      end

      def notify_user!(user_id, payload)
        notify(
          user_id: user_id,
          event: 'predictions_created',
          payload: payload
        )
      end
    end
  end
end