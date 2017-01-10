class AddColumnFlowerIdToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :flower_id, :integer
  end
end
