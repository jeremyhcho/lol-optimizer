module Admin
  module Stats
    class CompareParser
      attr_reader :slate_id

      def initialize(opts)
        @slate_id = opts[:slate_id]
      end

      def perform
        return _default_result unless slate_id > 0

        Rails.cache.fetch(_compare_stats_cache_key, expires_in: 2.hours) do
          ::Slates::ShowSerializer
            .new(slate, _serializer_options)
            .serializable_hash
        end
      end

      private

      def _compare_stats_cache_key
        "stats_for:stat_type=compare,slate_id=#{slate_id}"
      end

      def _default_result
        {
          players: [],
          teams: []
        }
      end

      def _serializer_options
        {
          with_players: true,
          with_teams: true,
          with_prediction: true,
          with_stats: true
        }
      end

      def slate
        @slate ||= Slate.find(slate_id)
      end
    end
  end
end