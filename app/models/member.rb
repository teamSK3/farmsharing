class Member < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  mount_uploader :image, ImageUploader

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  has_many :creates
  belongs_to :member
  has_many :likes
  has_many :items

  has_many :active_relationships, class_name: "Relationship", foreign_key: :follower_id, dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship",foreign_key: :following_id, dependent: :destroy

  has_many :followings, through: :active_relationships
  has_many :followers, through: :passive_relationships



    def follow(other_member)
      active_relationships.create(following_id: other_member.id)
    end

    def unfollow(other_member)
      active_relationships.find_by(following_id: other_member.id).destroy
    end

    def following?(other_member)
      followings.include?(other_member)
    end

    def followed_by?(member)
      passive_relationships.where(follower_id: member.id).exists?
    end


  has_many :likes
  has_many :items

end
