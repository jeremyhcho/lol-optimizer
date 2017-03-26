module Players
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :team,
               :active,
               :stats,
               :matches

    def stats
      return {} if relevant_stats.empty?
      ::Admin::Stats::AverageParser.new(relevant_stats, match_ids.length).perform
    end

    def relevant_stats
      object.stats.each_with_object([]) do |stat, arr|
        arr << stat.stats if match_ids.include?(stat.match_id)
        arr
      end
    end

    def team
      ::Teams::MinSerializer.new(object.team).serializable_hash
    end

    def match_ids
      object.unique_matches.map(&:remote_id).reverse[0..games_back.to_i]
    end

    def games_back
      options[:games_back] - 1 || -1
    end

    def include_stats?
      options[:with_stats].present?
    end

    def include_matches?
      options[:with_matches].present?
    end

    def matches
      object.unique_matches.map do |match|
        Matches::ShowSerializer.new(match, with_match_stats: true, recorded_by: object)
                               .serializable_hash
      end
    end
  end
end
