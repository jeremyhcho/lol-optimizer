module Admin
  module Stats
    class AverageParser
      attr_reader :stats, :count

      def initialize(stats)
        @count = stats.length
        @stats = stats
      end

      def perform
        result = {}

        _keys.each do |key|
          result[key] = format(
            '%.2f',
            stats.inject(0) { |a, e| a + e[key] } / count.to_f
          ).to_f
        end

        result
      end

      def _keys
        stats.first.keys
      end
    end
  end
end
