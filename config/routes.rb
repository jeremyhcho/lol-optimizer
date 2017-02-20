Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    namespace :v1 do
      namespace :admin do
        namespace :s3 do
          resources :sign, only: [:index]
        end
      end
    end
  end

  get '*path', to: 'static_pages#root'
end
