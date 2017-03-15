module PlayersSlates
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :game_info,
               :salary,
               :team_abbreviation,
               :prediction

    def remote_id
      object.player.remote_id
    end

    def name
      object.player.name
    end

    def position
      object.player.position
    end

    def team_abbreviation
      object.team_abbrev
    end

    def prediction
      Predictions::Players::ShowSerializer.new(object).serializable_hash
    end

    def include_prediction?
      options[:with_predictions].present?
    end
  end
end