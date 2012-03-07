class Article < ActiveRecord::Base
  validates :title, :body, presence: true
  attr_accessible :title, :author_id, :body, :edit_count
  belongs_to :author
  #def self.paginate(page)
   # paginate  :per_page => 10, :page => page
  #end
end
