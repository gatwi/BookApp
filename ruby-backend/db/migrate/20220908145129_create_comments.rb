class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment
      t.string :review
      t.integer :rating
      t.string :username
    end
  end
end
