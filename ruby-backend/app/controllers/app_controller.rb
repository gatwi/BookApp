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

    get "/comments" do
        comments = Comment.all.order(:created_at)
        comments.to_json
    end
      
      #sends info to the server
      post "/comments" do
        comment = Comment.create(comment: params[:comment], review: params[:review], rating: params[:rating], username: params[:username])
        comment.to_json
    end

      get "/comments" do
        comments = Comment.all.order(:created_at)
        comments.to_json
    end
      
      #sends info to the server
      post "/comments" do
        comment = Comment.create(comment: params[:comment], review: params[:review], rating: params[:rating], username: params[:username])
        comment.to_json
    end
    
end

