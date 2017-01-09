class AddShopIdToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :owner_id, :integer
  end
end
