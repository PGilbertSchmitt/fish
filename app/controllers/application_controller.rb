require 'redcarpet'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Converts the raw markdown text into html
  def convert(md_str)
        renderer = Redcarpet::Render::HTML.new(render_options = {})
        converter = Redcarpet::Markdown.new(renderer, extensions = {})
        return converter.render(md_str)
    end
end
