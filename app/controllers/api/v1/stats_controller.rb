module Api
  module V1
    class StatsController < Api::V1::ApiBaseController
      before_action :prepare_params, only: [:index]

      def index
        expose ::Admin::Stats::Parser.new(params).perform
      end

      private

      def prepare_params
        params.slice(*_option_keys)
        params[:games_back] = params[:games_back].to_i if params[:games_back]
        params[:slate_id] = params[:slate_id].to_i if params[:slate_id]
      end

      def _option_keys
        [:stat_type, :games_back, :date, :slate_id]
      end
    end
  end
end