class MarketController < ApplicationController
	def index
		@warehouses = Warehouse.all
		@shops = Shop.all
		@owners = Owner.all
		@flowers = Flower.all

		@shops_q = Shop
					.joins(:flowers)
					.where('flower_id=3')

		@shops.find_each do |shop|
			@flowers_q = Flower
						.joins(:shops)
						.where('flowers_shops.shop_id=?',shop.id)
						.sum(:cost)
			 puts @flowers_q	
		end

		@flower_cost = Flower.sum(:cost)
		@warehouse_quantity = Warehouse.sum(:quantity)
		@market_cost = @flower_cost * @warehouse_quantity

	end
end
