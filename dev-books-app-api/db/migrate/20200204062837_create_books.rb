class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.integer :customerReviews
      t.string :published
      t.string :img

      t.timestamps
    end
  end
end