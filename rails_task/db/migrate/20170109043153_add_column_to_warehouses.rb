class AddColumnToWarehouses < ActiveRecord::Migration[5.0]
  def change
    add_column :warehouses, :quantity, :integer
  end
end
