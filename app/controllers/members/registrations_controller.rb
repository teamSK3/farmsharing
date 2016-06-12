class Members::RegistrationsController < Devise::RegistrationsController
# before_action :configure_sign_up_params, only: [:create]
  before_action :configure_permitted_params, only: [:update]


# def configure_permitted_parameters
#     devise_parameter_sanitizer.for(:account_update) do |m|
#       m.permit(:name, :email, :image, :sex, :password, :password_confirmation, :current_password)
  # def configure_permitted_params
  #     devise_parameter_sanitizer.for(:account_update) << :name
  #     devise_parameter_sanitizer.for(:account_update) << :image
  #     devise_parameter_sanitizer.for(:account_update) << :sex
  #     devise_parameter_sanitizer.for(:account_update) << :birthday
  # end

def mypage
  @member = Member.find(params[:id])
end

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # # POST /resource
  # def create
  #   super
  # end

  # # GET /resource/edit
  # def edit
  #   super
  # end

  # # PUT /resource
  # def update
  #   super
  # end

  # # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  private

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_permitted_params
    devise_parameter_sanitizer.permit(:account_update) { |m| m.permit(:email, :password, :password_confirmation, :current_password,:name, :image, :birthday, :sex) }
    # devise_parameter_sanitizer.permit(:account_update, keys: [:name, :image, :birthday, :sex])
  end


  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
