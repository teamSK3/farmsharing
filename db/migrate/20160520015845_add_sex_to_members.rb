class AddSexToMembers < ActiveRecord::Migration
  def change
    add_column :members, :sex, :integer
  end
end
