class AddColumnToShop < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :name, :string
    add_column :shops, :location, :string
  end
end
