class AddColumnToRg < ActiveRecord::Migration[5.0]
  def change
    add_column :rgs, :name, :string
    add_column :rgs, :username, :string
  end
end
