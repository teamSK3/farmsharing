class AddImageToMembers < ActiveRecord::Migration
  def change
    add_column :members, :image, :string
  end
end
