class MarketController < ApplicationController
	def index
		@warehouses = Warehouse.all
		@shops = Shop.all
		@owners = Owner.all
		@flowers = Flower.all

		@shops_q = Shop
					.joins(:flowers)
					.where('flower_id=3')

		@shop_total = Order.group(:shop_id).sum(:amount)
		# @test = Order.group(:owner_id)
		puts @shop_total.inspect
		@owners_total = Order
						.select('owner_id, amount')
						.joins(shop: :owner)
						.group('owner_id')
						.sum(:amount)
		puts @owners_total.inspect
		@flower_cost = Flower.sum(:cost)
		@warehouse_quantity = Warehouse.sum(:quantity)
		@market_cost = @flower_cost * @warehouse_quantity

	end
end
