class AddPriceToItems < ActiveRecord::Migration
  def change
    add_column :items, :Price, :string
  end
end
