module Api
  module V1
    class SessionsController < ApiBaseController

      def create
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
        )

        if @user.nil?
          error! :invalid_credentials, 'Invalid email/password combination'
        else
          login!(@user)
          expose Users::ShowSerializer.new(@user).serializable_hash
        end
      end

      def destroy
        @user = current_user

        if @user
          logout!
          expose basic_success_message
        else
          error! :invalid_version, 'Nobody is signed in!'
        end
      end
    end
  end
end
