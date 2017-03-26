module Matches
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :time,
               :week,
               :stats

    def stats
      options[:recorded_by]
        .stats
        .select { |stat| stat.match_id == object.remote_id }
        .inject({}) do |a, e|
          a.merge(e.stats) { |_, old_val, new_val| old_val + new_val }
        end
    end

    def include_stats?
      options[:with_match_stats].present?
    end
  end
end