module Admin
  module Stats
    class ActualParser
      attr_reader :games_back

      def initialize(opts)
        @games_back = opts[:games_back]
      end

      def perform
        Rails.cache.fetch(_actual_stats_cache_key, expires_in: 2.hours) do
          { players: players, teams: teams }
        end
      end

      private

      def _actual_stats_cache_key
        "stats_for:stat_type=actual,games_back=#{games_back}"
      end

      def players
        scoped_players.map do |player|
          Players::ShowSerializer.new(
            player,
            { with_stats: true, games_back: games_back }
          ).serializable_hash
        end
      end

      def scoped_players
        Player.includes(:team, :red_team_matches, :blue_team_matches, :stats).active
      end

      def teams
        scoped_teams.map do |team|
          Teams::ShowSerializer.new(
            team,
            { with_stats: true, games_back: games_back }
          ).serializable_hash
        end
      end

      def scoped_teams
        Team.includes(:red_team_matches, :blue_team_matches, :stats).active
      end
    end
  end
end