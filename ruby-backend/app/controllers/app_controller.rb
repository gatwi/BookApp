class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json' 

     #returns all comments
    get "/comments" do
      comments = Comment.all.order
      comments.to_json
    end
    
    #sends info to the server
    post "/comments" do
      comment = Comment.create(comment: params[:comment], review: params[:review], rating: params[:rating], username: params[:username])
      comment.to_json
    end
    
    # patch "/comments/:id" do
    #   comments = comment.find(params[:id])
    #   comments.update(body: params[:body])
    #   comments.to_json
    # end
    
    # delete "/comments/:id" do
    #   comments = comment.find(params[:id])
    #   comments.destroy
    #   comments.to_json
    # end

    get "/users" do
        users = User.all.order
        users.to_json
    end
      
      
    post "/users" do
        user = User.create(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], age: params[:age], email: params[:email], password: params[:password], location: params[:location])
        user.to_json
    end

    # patch "/users/:id" do
    #   users = user.find(params[:id])
    #   users.update(body: params[:body])
    #   users.to_json
    # end
    
    # delete "/users/:id" do
    #   users = user.find(params[:id])
    #   users.destroy
    #  users.to_json
    # end

    get "/books" do
        books = Book.all.order
        books.to_json
    end
      
      #sends info to the server
    post "/books" do
        book = Book.create(title: params[:title], author: params[:author], publication: params[:publication], genre: params[:genre])
        book.to_json
    end

    # patch "/books/:id" do
    #   books = book.find(params[:id])
    #   books.update(body: params[:body])
    #   books.to_json
    # end
    
    # delete "/books/:id" do
    #   books = book.find(params[:id])
    #   books.destroy
    #  books.to_json
    # end

    
end

