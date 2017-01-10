class AddColumnToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :shop_id, :integer
    add_column :orders, :customer_id, :integer
  end
end
