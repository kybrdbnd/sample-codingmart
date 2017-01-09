class Warehouse < ApplicationRecord
	has_many :shops
	has_many :owners, through: :shops
end
