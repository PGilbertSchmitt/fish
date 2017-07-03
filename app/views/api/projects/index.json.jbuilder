json.array! @projects do |project|
    json.extract! project,
                  :title,
                  :desc,
                  :slug,
                  :stack,
                  :thumbnail_path
end