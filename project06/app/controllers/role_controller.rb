class RoleController < ApplicationController
  def new
    @role = Role.new
  end
  
  def edit
    @role = Role.find(params[:id])
  end

  def create
    @role = Role.new(params[:game])
    @role.save
  end

  def update
    @role = Role.find(params[:id])
    @role.update_attributes(params[:game])
  end
end
