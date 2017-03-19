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
              wins: stat[7],
              losses: stat[8],
              first_bloods: stat[3],
              dragon_kills: stat[6],
              baron_kills: stat[5],
              towers_destroyed: stat[4],
              win_in_30_mins: stat[9]
            )
          end
        end
      rescue => e
        raise "StatsTeamSync: #{e.message}"
      end
    end
  end
end
