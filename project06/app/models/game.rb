class Game < ActiveRecord::Base
  belongs_to :user
  
  def isNew?
    @game.user.id == current_user.id
  end
end
