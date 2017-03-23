module Admin
  module Stats
    class TotalParser
      attr_reader :stats

      def initialize(stats)
        @stats = stats
      end

      def perform
        result = {}

        _keys.each do |key|
          result[key] = stats.inject(0) { |a, e| a + e[key] }.to_f
        end

        result
      end

      private

      def _keys
        stats.first.try(:keys) || []
      end
    end
  end
end