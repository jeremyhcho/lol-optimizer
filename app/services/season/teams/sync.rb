module Season
  module Teams
    class Sync < Season::BaseSync
      def perform
        Team.transaction do
          data['proTeams'].each do |team|
            raise "Failed finding or creating team: #{team['id']}" unless
              Team.create_with(remote_id: team['id']).find_or_create_by(
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
