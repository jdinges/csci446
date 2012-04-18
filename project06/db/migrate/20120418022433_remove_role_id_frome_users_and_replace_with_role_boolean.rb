class RemoveRoleIdFromeUsersAndReplaceWithRoleBoolean < ActiveRecord::Migration
  def up
    remove_column :users, :role_id
    add_column :users, :role, :boolean
  end

  def down
  end
end
