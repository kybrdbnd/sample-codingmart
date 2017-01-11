class Owner < ApplicationRecord
	has_many :shops
	has_many :orders, through: :shops
end
