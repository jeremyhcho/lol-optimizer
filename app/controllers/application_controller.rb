class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @user = user
  end

  def current_user
   # @todo Revert this change when log in / signup flow is finished
   return if session[:session_token].nil?
   @current_user = User.first
   @current_user ||= User.find_by_session_token(session[:session_token])
 end

 def logged_in?
   # @todo Revert this change when log in / signup flow is finished
   true
   current_user.present?
 end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: { base: ['Invalid credentials'] }, status: 401 unless current_user
  end
end
