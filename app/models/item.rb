class Item < ActiveRecord::Base
	validates :category, length: { maximum: 10 }
	mount_uploader :image, ImageUploader
end
