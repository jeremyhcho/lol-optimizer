module Season
  module Teams
    class Sync < Season::BaseSync
      def perform
        Team.transaction do
          data['proTeams'].each do |team|
            next if Team.find_by(remote_id: team['id'])
            Team.create!(
              remote_id: team['id'],
              name: team['name'],
              league: team['league'],
              short_name: team['shortName'],
              active: true
            )
          end
        end
      rescue => e
        raise "TeamsSync: #{e.message}"
      end

      private

      def reset_active_teams!
        Team.update_all(active: false)
        active_teams.update_all(active: true)
      end

      def active_teams
        @active_teams ||= Team.where(
          'remote_id IN (?)',
          data['proteams'].map { |team| team['id'] }
        )
      end
    end
  end
end
