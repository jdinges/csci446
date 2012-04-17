class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  acts_as_authentic
end
