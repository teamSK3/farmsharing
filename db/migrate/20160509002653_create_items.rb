class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :category
      t.string :name
      t.string :image
      t.integer :count

      t.timestamps null: false
    end
  end
end
