class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  acts_as_authentic
  has_many :games
  #has_one :role
  #belongs_to :role
  
  def firstInDB?
    if User.where(:id=>1)
      false
    else
      true
    end
  end
  
  def role_ids
    role.id
  end
  
  def role_symbols
    #role.name.underscore.to_sym
    if role
      ["admin".to_sym]
    else
      ["user".to_sym]
    end
  end
end
