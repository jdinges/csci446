class SessionsController < ApplicationController
  def create
    session[:password] = params[:password]
    flash[:notice] = 'Successfully logged in'
    redirect_to games_path
  end

  def destroy
    reset_session
    flash[:notice] = 'Successfully logged out'
    redirect_to games_path
  end
end
