module Api
  module V1
    class StatsController < Api::V1::ApiBaseController
      def index
        expose ::Admin::Stats::Parser.new(opts).perform
      end

      private

      def opts
        {
          stat_type: params[:stat_type],
          games_back: params[:games_back].to_i,
          date: DateTime.parse(params[:date]).utc,
          slate_id: params[:slate_id].to_i
        }
      end
    end
  end
end