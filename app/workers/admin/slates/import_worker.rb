module Admin
  module Slates
    class ImportWorker < BaseWorker
      include Notifiable

      sidekiq_options queue: :upload_slate_csv, retry: false

      def perform(opts)
        opts = HashWithIndifferentAccess.new(opts)
        payload = Admin::Slates::Import.new(opts).perform

        notify_user!(opts, payload)
      end

      private

      def notify_user!(opts, payload)
        notify(
          user_id: opts[:user_id],
          event: 'slate_csv_imported',
          payload: payload
        )
      end
    end
  end
end