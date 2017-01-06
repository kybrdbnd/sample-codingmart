class AddCostOfFlowerToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :cost, :integer
  end
end
