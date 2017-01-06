class AddNameToShopowners < ActiveRecord::Migration[5.0]
  def change
    add_column :shopowners, :name, :string
  end
end
