module Season
  module Matches
    class Sync < Season::BaseSync
      def perform
        Match.transaction do
          data['proMatches'].each do |match|
            raise "Failed finding or creating match: #{match['id']}" unless
              Match.create_with(remote_id: match['id']).find_or_create_by(
                blue_team_id: match['blueTeamId'],
                red_team_id: match['redTeamId'],
                time: match['time'],
                week: match['week'],
                winner: match['winner']
              )
          end
        end
      rescue => e
        raise "MatchesSync: #{e.message}"
      end
    end
  end
end
