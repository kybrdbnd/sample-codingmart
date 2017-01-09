class AddColumnToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :warehouse_id, :integer
  end
end
