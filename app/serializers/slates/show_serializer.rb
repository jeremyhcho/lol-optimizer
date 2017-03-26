module Slates
  class ShowSerializer < BaseSerializer
    attributes :id, :name, :start_time, :status, :players, :teams

    def players
      PlayersSlate.includes({ player: [:team, :matches] }, :prediction)
                  .where(slate_id: object.id)
                  .map do |players_slate|
        ::PlayersSlates::ShowSerializer.new(players_slate, options.merge(slate: object)).serializable_hash
      end
    end

    def teams
      SlatesTeam.includes({ team: [:red_team_matches, :blue_team_matches] }, :prediction)
                .where(slate_id: object.id)
                .map do |players_slate|
        ::SlatesTeams::ShowSerializer.new(players_slate, options.merge(slate: object)).serializable_hash
      end
    end

    def start_time
      object.start_time
            .in_time_zone('America/Los_Angeles')
            .strftime("%m-%d-%y %I:%M %p %Z")
    end

    def include_players?
      options[:with_players].present?
    end

    def include_teams?
      options[:with_teams].present?
    end
  end
end