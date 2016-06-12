class Relationship < ActiveRecord::Base
	 belongs_to :follower, class_name: "Member"
	 belongs_to :following, class_name: "Member"
	
	 validates :follower_id, presence: true
  	 validates :following_id, presence: true

end
