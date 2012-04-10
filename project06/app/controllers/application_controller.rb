class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :admin?
  protected
  
  def authorize
    unless admin?
      flash[:error] = "unauthorized access"
      redirect_to games_path
      false
    end
  end
  
  def admin?
    session[:password].eql?("foobar")
  end
end
