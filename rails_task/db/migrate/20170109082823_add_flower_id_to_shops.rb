class AddFlowerIdToShops < ActiveRecord::Migration[5.0]
  def change
    add_column :shops, :flower_id, :integer
  end
end
