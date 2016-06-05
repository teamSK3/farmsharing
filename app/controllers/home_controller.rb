class HomeController < ApplicationController
	
	
  def mypage
    @member = Member.find(params[:id])
  end
end
