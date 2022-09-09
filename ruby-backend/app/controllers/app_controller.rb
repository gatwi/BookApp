class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json' 

     #returns all comments
    get "/comments" do
      comments = Comment.all.order(:created_at)
      comments.to_json
    end
    
    #sends info to the server
    post "/comments" do
      comment = Comment.create(comment: params[:comment], review: params[:review], rating: params[:rating], username: params[:username])
      comment.to_json
    end
    
    # patch "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.update(body: params[:body])
    #   comments.to_json
    # end
    
    # delete "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.destroy
    #   comments.to_json
    # end

    get "/users" do
        users = User.all.order(:created_at)
        users.to_json
    end
      
      
    post "/users" do
        user = User.create(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], age: params[:age], email: params[:email], password: params[:password], location: params[:location])
        user.to_json
    end

    # patch "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.update(body: params[:body])
    #   comments.to_json
    # end
    
    # delete "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.destroy
    #   comments.to_json
    # end

    get "/books" do
        books = Book.all.order(:created_at)
        books.to_json
    end
      
      #sends info to the server
    post "/books" do
        book = Book.create(title: params[:title], author: params[:author], publication: params[:publication], genre: params[:genre])
        book.to_json
    end

    # patch "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.update(body: params[:body])
    #   comments.to_json
    # end
    
    # delete "/commentss/:id" do
    #   comments = comments.find(params[:id])
    #   comments.destroy
    #   comments.to_json
    # end

    
end

