module Api
  module V1
    module Admin
      module S3
        class SignController < ::ApplicationController
          def index
            respond_to do |format|
              format.json { render json: { signedUrl: url } }
            end
          end

          private

          def storage
            @storage ||= Fog::Storage.new(
              provider: 'AWS',
              aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
              aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
              region: 'us-west-2'
            )
          end

          def options
            { path_style: true }
          end

          def headers
            {
              'Content-Type' => params[:contentType],
              'x-amz-acl' => 'public-read'
            }
          end

          def url
            storage.put_object_url(
              "#{ENV['AWS_S3_BUCKET_NAME']}/slates",
              params[:objectName],
              15.minutes.from_now.to_time.to_i,
              headers,
              options
            )
          end
        end
      end
    end
  end
end