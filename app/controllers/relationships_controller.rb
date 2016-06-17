class RelationshipsController < ApplicationController

	def create
		@member = Member.find(params[:member_id])
		@follow = current_member.active_relationships.build(following_id: @member.id)
		if @follow.save
			redirect_to member_path(@member), notice: "フォローしました。"
		else
			redirect_to member_path(@member)
		end
	end

	def destroy
		@member = Member.find(params[:member_id])
		@follow = current_member.passive_relationships.find_by!(follower_id: @member.id)
		@follow.destroy
		redirect_to member_path(@member), notice: "フォロー解除しました"
	end
end
