class Order < ApplicationRecord
	belongs_to :shop
	belongs_to :customer
	belongs_to :flower
	has_many :owners

	before_save :finalize

	def finalize
		self[:amount] = quantity * flower.cost
	end
end
