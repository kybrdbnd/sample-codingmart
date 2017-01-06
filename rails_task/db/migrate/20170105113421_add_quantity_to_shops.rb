class AddQuantityToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :quantity, :integer
  end
end
