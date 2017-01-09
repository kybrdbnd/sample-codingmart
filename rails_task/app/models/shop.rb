class Shop < ApplicationRecord
	belongs_to :warehouse
	belongs_to :owner
	has_and_belongs_to_many :flowers
end
