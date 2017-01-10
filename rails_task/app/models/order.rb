class Order < ApplicationRecord
	belongs_to :shop
	belongs_to :customer
	belongs_to :flower
end
