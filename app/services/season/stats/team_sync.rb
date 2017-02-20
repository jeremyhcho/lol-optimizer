module Season
  module Stats
    class TeamSync < Season::BaseSync
      def perform
        TeamStat.transaction do
          data['stats']['actualTeamStats'].each do |stat|
            next if TeamStat.where(
              team_id: stat[0],
              match_id: stat[1],
              game_number: stat[2]
            ).present?

            TeamStat.create!(
              team_id: stat[0],
              match_id: stat[1],
              game_number: stat[2],
              stats: stat[3..-1]
            )
          end
        end
      rescue => e
        raise "StatsTeamSync: #{e.message}"
      end
    end
  end
end
