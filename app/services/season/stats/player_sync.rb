module Season
  module Stats
    class PlayerSync < Season::BaseSync
      def perform
        PlayerStat.transaction do
          data['stats']['actualPlayerStats'].each do |stat|
            next if PlayerStat.where(
              player_id: stat[0],
              match_id: stat[2],
              game_number: stat[3]
            ).present?

            PlayerStat.create!(
              player_id: stat[0],
              team_id: stat[1],
              match_id: stat[2],
              game_number: stat[3],
              stats: stat[4..-1]
            )
          end
        end
      rescue => e
        raise "StatsPlayerSync: #{e.message}"
      end
    end
  end
end
