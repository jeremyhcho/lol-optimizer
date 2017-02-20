module Season
  module Matches
    class Sync < Season::BaseSync
      def perform
        Match.transaction do
          data['proMatches'].each do |match|
            next if Match.find_by(remote_id: match['id'])
            Match.create!(
              remote_id: match['id'],
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
