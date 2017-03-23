module Admin
  module Stats
    class AverageParser
      attr_reader :stats, :match_count

      def initialize(stats, match_count)
        @match_count = match_count
        @stats = stats
      end

      def perform
        result = {}

        _keys.each do |key|
          result[key] = format(
            '%.2f',
            stats.inject(0) { |a, e| a + e[key] } / match_count.to_f
          ).to_f
        end

        result
      end

      def _keys
        stats.first.try(:keys) || []
      end
    end
  end
end
