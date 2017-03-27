module Api
  module V1
    class UsersController < Api::V1::ApiBaseController
      def create
        @user = User.new(user_params)

        if @user.save
          login!(@user)
          expose Users::ShowSerializer.new(@user).serializable_hash
        else
          error! :invalid_resource, @user.errors
        end
      end

      def update
      end

      def destroy
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :is_admin)
      end
    end
  end
end
