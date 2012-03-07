class Author < ActiveRecord::Base
  has_many :articles
  validates_presence_of :name
  validate :no_author_named_pat
  
  has_attached_file :photo,
                    :url => '/assets/:class/:attachment/:id/:style/:filename'
  
  def to_s
    name
  end
  
  private
  
    def no_author_named_pat
      errors[:base]<<"Must not be named Pat because of disgruntled former lover" if name.include?("Pat")
    end
end
