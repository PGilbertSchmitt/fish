class AddStackToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :stack, :string
  end
end
