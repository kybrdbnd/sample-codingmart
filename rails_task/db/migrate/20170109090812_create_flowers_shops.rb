class CreateFlowersShops < ActiveRecord::Migration[5.0]
  def change
    create_table :flowers_shops do |t|
      t.integer :shop_id
      t.integer :flower_id
    end
  end
end
