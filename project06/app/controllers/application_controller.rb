class ApplicationController < ActionController::Base
  protect_from_forgery
  #include Authentication
  helper :all
  helper_method :current_user
  before_filter { |c| Authorization.current_user = c.current_user  }
  
  def current_user_session
    return @current_user_session if defined?(@current_user_session)
    @current_user_session = UserSession.find
  end

  def current_user
    return @current_user if defined?(@current_user)
    @current_user = current_user_session && current_user_session.record
  end
  # helper_method :admin?
  #   protected
  #   
  #   def authorize
  #     unless admin?
  #       flash[:error] = "unauthorized access"
  #       redirect_to games_path
  #       false
  #     end
  #   end
  #   
  #   def admin?
  #     session[:password].eql?("foobar")
  # end
end
