module Admin
  module Stats
    class Parser
      attr_reader :opts

      def initialize(opts)
        @opts = opts
      end

      def perform
        parser_class.new(opts).perform
      end

      private

      def parser_class
        case opts[:stat_type]
        when 'actual'
          Admin::Stats::ActualParser
        when 'predicted'
          Admin::Stats::PredictedParser
        when 'compare'
          Admin::Stats::CompareParser
        end
      end
    end
  end
end