module Admin
  module Slates
    class ImportWorker < BaseWorker
      sidekiq_options queue: :upload_slate_csv

      def perform(opts)
        Slates::Admin::Import.new(opts).perform
      end
    end
  end
end