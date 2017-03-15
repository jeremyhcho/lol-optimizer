module Admin
  module Stats
    class CompareParser
      attr_reader :slate_id

      def initialize(opts)
        @slate_id = opts[:slate_id]
      end

      def perform
      end
    end
  end
end