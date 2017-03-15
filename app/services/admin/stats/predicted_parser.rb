module Admin
  module Stats
    class PredictedParser
      attr_reader :slate_id

      def initialize(opts)
        @slate_id = opts[:slate_id]
      end

      def perform
        Slates::ShowSerializer.new(slate, _serializer_options).serializable_hash
      end

      private

      def _serializer_options
        {
          with_players: true,
          with_teams: true,
          with_predictions: true
        }
      end

      def slate
        @slate ||= Slate.find(slate_id)
      end
    end
  end
end