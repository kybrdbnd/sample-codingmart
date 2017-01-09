class AddShopIdToFlowers < ActiveRecord::Migration[5.0]
  def change
    add_column :flowers, :shop_id, :integer
  end
end
