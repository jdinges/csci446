class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name, :null => false

      t.timestamps
    end
    
    add_column :articles, :author_id, :integer
    
    # get author name from article
    Article.all.each do |article|
      author = Author.create(:name => article.author)
      article.author = author
      article.save
    end

    # remove author attribute from articles
    remove_column :articles, :author
  end
end
