module Players
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :team,
               :active,
               :stats

    def stats
      object.stats.each_with_object([]) do |stat, arr|
        arr << stat.stats if match_ids.include?(stat.match_id)
        arr
      end
    end

    def team
      object.team.short_name
    end

    def match_ids
      object.matches.map(&:remote_id).reverse[0...games_back.to_i]
    end

    def games_back
      options[:games_back] || -1
    end

    def include_stats?
      options[:with_stats].present?
    end
  end
end
