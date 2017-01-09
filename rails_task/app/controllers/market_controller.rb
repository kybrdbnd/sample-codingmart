class MarketController < ApplicationController
	def index
		@warehouses = Warehouse.all
		@shops = Shop.all
		@owners = Owner.all
		@flowers = Flower.all
		@warehouse_q = Warehouse.count
		# puts @warehouse_q
	end
end
