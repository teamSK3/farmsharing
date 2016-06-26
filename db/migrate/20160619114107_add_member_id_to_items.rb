class AddMemberIdToItems < ActiveRecord::Migration
  def change
    add_column :items, :member_id, :integer
  end
end
