class Follow < ActiveRecord::Base

	acts_in_relation :action, source: :member, target: :member
end

