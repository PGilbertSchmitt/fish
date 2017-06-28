Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :projects, param: :title, only: [:index, :show]
  end

  match '*path' => "static_pages#root", via: :all
end
