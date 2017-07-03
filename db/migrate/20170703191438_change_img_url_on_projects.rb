class ChangeImgUrlOnProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :img_url

    add_column :projects, :thumbnail_path, :string
    add_column :projects, :header_img_path, :string
  end
end
