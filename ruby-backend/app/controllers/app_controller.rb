#user_controller.rb

class UserController < ApplicationController

    skip_before_action :authorize, only: :create

    get '/user' do
        user = User.all 
        user.to_json
    end

    post '/register' do 
        user = User.create(:email, :first_name, :last_name, :username, :location, :password, :password_confirmation)
        user.to_json
    end

    post 'login' do 


    delete '/user' do 
        user = User.all 
        user.destroy 
        user.json 
    end

end

#book_controller.rb

