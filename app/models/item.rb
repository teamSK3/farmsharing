class Item < ActiveRecord::Base
	validates :category, length: { maximum: 10 }
	mount_uploader :image, ImageUploader
	belongs_to :member
    has_many :likes, dependent: :destroy
    def like_member(member_id)
   		likes.find_by(member_id: member_id)
  	end
end
