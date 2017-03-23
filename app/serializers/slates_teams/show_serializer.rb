module SlatesTeams
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :game_info,
               :salary,
               :team_abbreviation,
               :prediction,
               :stats

    def remote_id
      object.team.remote_id
    end

    def name
      object.team.name
    end

    def position
      object.team.position
    end

    def team_abbreviation
      object.team_abbrev
    end

    def prediction
      Predictions::Teams::ShowSerializer.new(object.prediction).serializable_hash
    end

    def stats
      return {} unless _match
      ::Admin::Stats::TotalParser
        .new(object.team.stats.where(match_id: _match.remote_id).map(&:stats)).perform
    end

    def _match
      @_match ||= object.team.matches.find do |match|
        DateTime.parse(match.time).to_date ==
          options[:slate].start_time.in_time_zone('America/New_York').to_date
      end
    end

    def include_prediction?
      options[:with_prediction].present?
    end

    def include_stats?
      options[:with_stats].present?
    end
  end
end