module Api
  module V1
    module Admin
      module Slate
        class UploadCsvController < Api::V1::ApiBaseController
          def create
            jid = Admin::Slates::ImportWorker.perform_async(opts)
            data = { jid: jid }

            expose data
          end

          private

          def csv_url
            "#{ENV['AWS_S3_BUCKET_NAME']}.s3.amazonaws.com/" \
            "slates/#{params[:file][:name]}"
          end

          def opts
            {
              csv_url: csv_url,
              name: params[:name],
              start_time: params[:start_time]
            }
          end
        end
      end
    end
  end
end
