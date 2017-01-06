class AddColumnToFlower < ActiveRecord::Migration[5.0]
  def change
    add_column :flowers, :flowerType, :string
  end
end
