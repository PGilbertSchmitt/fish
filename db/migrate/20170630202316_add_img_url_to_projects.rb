class AddImgUrlToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :img_url, :string
  end
end
