module Admin
  module Slates
    class CreatePredictions
      attr_reader :slate_id

      def initialize(slate_id)
        @slate_id = slate_id
      end

      def perform
        slate.generate_predictions!
        slate.update_attribute(:status, 2)
        _success
      rescue
        slate.update_attribute(:status, 3)
        _error
      end

      private

      def _success
        {
          slate_id: slate_id,
          success: true,
          status: 2
        }
      end

      def _error
        {
          slate_id: slate_id,
          success: false,
          status: 3
        }
      end

      def slate
        @slate = Slate.includes(
          players_slates: [{ player: [:matches, :stats] }],
          slates_teams: [{ team: [:red_team_matches, :blue_team_matches, :stats] }]
        ).find(slate_id)
      end
    end
  end
end