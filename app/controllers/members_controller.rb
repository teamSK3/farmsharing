class MembersController < ApplicationController
	before_action :set_member, only: [:show, :edit, :update, :destroy]
	# before_action :authenticate_member!
  # before_action :signed_in_member, only:[:index, :edit, :update, :destroy, :following, :followers]
	def index
    @members = Member.order("id")
  	end

  # 会員情報の詳細
  	def show
    	@member = Member.find(params[:id])
  	end
  	def edit
    	@member = Member.find(params[:id])
  	end

  	def update
  		params.permit!
	    @member = Member.find(params[:id])
	    @member.assign_attributes(params[:member])
   	 	if @member.save
      redirect_to @member, notice: "会員情報を更新しました。"
    	else
      render "edit"
  		end
	   end

  	def destroy
	    @member = Member.find(params[:id])
	    @member.destroy
	    redirect_to :members, notice: "会員を削除しました。"
  	end

    def followings
      @title = "Following"
      @member = Member.find(params[:id])
      @members = @member.followings.paginate(page: params[:page])
    end

    def followers
      @title = "Followers"
      @member = Member.find(params[:id])
      @members = @member.followers.paginate(page: params[:page])
    end

  	private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      params.require(:member).permit(:name, :birthday, :email, :image, :sex)
    end

end
