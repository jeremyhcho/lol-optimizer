module SlatesTeams
  class ShowSerializer < BaseSerializer
    attributes :remote_id,
               :name,
               :position,
               :game_info,
               :salary,
               :team_abbreviation

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
  end
end