Rails.application.routes.draw do
  root to: "static_pages#root"

  match '*path' => "static_pages#root", via: :all
end
