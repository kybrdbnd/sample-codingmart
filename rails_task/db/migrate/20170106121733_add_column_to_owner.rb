class AddColumnToOwner < ActiveRecord::Migration[5.0]
  def change
    add_column :owners, :name, :string
    add_column :owners, :phno, :integer
  end
end
