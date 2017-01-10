class CreateJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :flowers, :shops do |t|
      t.index :flower_id
      t.index :shop_id
    end
  end
end
