module SlatesTeams
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :game_info,
               :salary,
               :team_abbreviation,
               :prediction

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
      Predictions::Teams::ShowSerializer.new(object).serializable_hash
    end

    def include_prediction?
      options[:with_predictions].present?
    end
  end
end