class RemoveAuthorColumnFromArticlesTable < ActiveRecord::Migration
  def up
    # remove author attribute from articles
    remove_column :articles, :author
  end

  def down
  end
end
