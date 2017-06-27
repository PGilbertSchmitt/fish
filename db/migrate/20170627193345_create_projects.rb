class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :desc, null: false
      t.string :post_url, null: false
      t.string :github_url
      t.string :live_url

      t.timestamps
    end
  end
end
