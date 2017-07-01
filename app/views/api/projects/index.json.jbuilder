json.array! @projects do |project|
    json.extract! project,
                  :title,
                  :desc,
                  :slug,
                  :img_url,
                  :stack
end