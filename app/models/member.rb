class Member < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :image, ImageUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

#   has_many :active_relationships,class_name:  "Relationship", foreign_key: "follower_id", dependent: :destroy
#   has_many :active_relationships,class_name:  "Relationship", foreign_key: "following_id", dependent: :destroy
#   has_many :following, through: :active_relationships, source: :following
#   has_many :followers, through: :passive_relationships, source: :follower

#   has_many :passive_relationships, class_name: "Relationship", foreign_key: "following_id", dependent: :destroy
#   has_many :followers, through: :passive_relationships, source: :follower

#   has_many :followeds, through: :active_relationships


#   def follow(other_member)
#     active_relationships.create(following_id: other_member.id)
#   end

#   def unfollow(other_member)
#     active_relationships.find_by(following_id: other_member.id).destroy
#   end

#   def following?(other_member)
#     following.include?(other_member)
#   end

#   def follow(other_member)
#     active_relationships.create(followed_id: other_member.id)
#   end

#  def unfollow(other_member)
#     active_relationships.find_by(followed_id: other_member.id).destroy
#   end
#   def following?(other_member)
#     following.include?(other_member)
#   end

end
