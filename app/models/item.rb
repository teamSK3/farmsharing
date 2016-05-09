class Item < ActiveRecord::Base
	validates :category, length: { maximum: 10 }
end
