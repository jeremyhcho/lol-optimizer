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

            PlayerStat.create!({
              player_id: stat[0],
              team_id: stat[1],
              match_id: stat[2],
              game_number: stat[3],
              kills: stat[4],
              deaths: stat[5],
              assists: stat[6],
              cs: stat[7],
              double_kills: stat[8],
              ten_ka: stat[-1]
            }.merge(_parse_multi_kills(stat)))
          end
        end
      rescue => e
        raise "StatsPlayerSync: #{e.message}"
      end

      private

      def _parse_multi_kills(stat)
        multi_kill_stats = stat[9..11]
        result = {
          triple_kills: 0,
          quad_kills: 0,
          penta_kills: 0
        }

        if multi_kill_stats[2] > 0
          result[:penta_kills] = multi_kill_stats[2]
        elsif multi_kill_stats[1] > 0
          result[:quad_kills] = multi_kill_stats[1]
        elsif multi_kill_stats[0] > 0
          result[:triple_kills] = multi_kill_stats[0]
        end

        result
      end
    end
  end
end
