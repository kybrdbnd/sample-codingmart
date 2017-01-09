class AddColumnToFlowers < ActiveRecord::Migration[5.0]
  def change
    add_column :flowers, :cost, :integer
  end
end
