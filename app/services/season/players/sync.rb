module Season
  module Players
    class Sync < Season::BaseSync
      def perform
        Player.transaction do
          reset_active_players!
          data['proPlayers'].each do |player|
            next if Player.find_by(remote_id: player['id'])
            Player.create!(
              remote_id: player['id'],
              name: player['name'],
              team_id: player['proTeamId'],
              active: true
            )
          end
        end
      rescue => e
        raise "PlayersSync: #{e.message}"
      end

      private

      def reset_active_players!
        Player.update_all(active: false)
        active_players.update_all(active: true)
      end

      def active_players
        @active_players ||= Player.where(
          'remote_id IN (?)',
          data['proPlayers'].map { |player| player['id'] }
        )
      end
    end
  end
end
