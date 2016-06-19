class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :member_id
      t.integer :target_member_id

      t.timestamps null: false
    end

      add_index :follows, [:member_id, :target_member_id], unique: true

  end
end
