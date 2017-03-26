Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    namespace :v1 do
      namespace :admin do
        namespace :s3 do
          resources :sign, only: [:index]
        end

        resources :slates, only: [:index, :show, :create, :update, :destroy]
      end

      resources :users, only: [:create, :update, :destroy]
      resource :session, only: [:create, :destroy]
      resources :stats, only: [:index]
      resources :players, only: [:show]
      resources :teams, only: [:show]
    end
  end

  get '*path', to: 'static_pages#root'
end
