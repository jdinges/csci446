class Article < ActiveRecord::Base
  validates :title, :author, :body, presence: true
  attr_accessible :title, :author, :body, :edit_count
  #def increment
    #@edit_count += 1
  #end
end
