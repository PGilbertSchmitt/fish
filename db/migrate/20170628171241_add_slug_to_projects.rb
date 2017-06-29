class AddSlugToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :slug, :string, null: false, unique: true
  end
end
