class Api::ProjectsController < ApplicationController
    def index
        @projects = Project.all
    end
    
    def show
        @project = Project.find_by title: params[:title]
        if @project.nil?
            render json: {error: "No such project #{params[:title]}"}, status: 	:unprocessable_entity
        else
            post_path = "public/#{ActionController::Base.helpers.asset_path(@project.post_url)}"
            post_raw_md = File.open(post_path) { |io| io.read }
            post_html = self.convert(post_raw_md)

            render json: { project: post_html }
        end
    end
end
