class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :publication
      t.integer :price
      t.string :genre
    end
  end
end
