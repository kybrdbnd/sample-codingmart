class RemoveColumnFromFlowers < ActiveRecord::Migration[5.0]
  def change
    remove_column :flowers, :shop_id, :integer
  end
end
