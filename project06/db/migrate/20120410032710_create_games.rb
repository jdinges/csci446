class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.integer :rating
      t.datetime :date_added

      t.timestamps
    end
  end
end
