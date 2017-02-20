module Api
  module V1
    class ApiBaseController < RocketPants::Base
      helper_method :current_user,
                    :logged_in?,
                    :basic_success_message,
                    :basic_failure_message

      def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @user = user
      end

      def current_user
        return if session[:session_token].nil?
        @current_user ||= User.find_by_session_token(session[:session_token])
      end

      def logged_in?
        current_user.present?
      end

      def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
      end

      def require_logged_in
        unless current_user
          render json: { base: ['Invalid credentials'] }, status: 401
        end
      end

      def basic_success_message
        { success: true }
      end

      def basic_failure_message
        { success: false }
      end
    end
  end
end
