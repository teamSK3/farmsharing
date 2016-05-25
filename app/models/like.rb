class Like < ActiveRecord::Base
  belongs_to :item, counter_cache: :likes_count
  belongs_to :member
end