module Season
  class Sync
    attr_reader :season

    def initialize(opts)
      @season = opts[:season]
    end

    def perform
      Player.transaction do
        [:teams, :players, :matches, :team_stats, :player_stats].each do |type|
          send("sync_#{type.to_s}!")
        end
      end
    rescue => e
      puts "Error occured while syncing season in #{e.message}"
    end

    private

    [:teams, :players, :matches, :team_stats, :player_stats].each do |type|
      define_method("sync_#{type.to_s}!") do
        sync_class =
          case type
          when :teams
            Season::Teams::Sync
          when :players
            Season::Players::Sync
          when :matches
            Season::Matches::Sync
          when :team_stats
            Season::Stats::TeamSync
          when :player_stats
            Season::Stats::PlayerSync
          end

        sync_class.new(_sync_options).perform
      end
    end

    def _sync_options
      { season: season, data: data }
    end

    def data
      @data ||= JSON.parse(
        RestClient.get("fantasy.na.lolesports.com/en-US/api/season/#{season}")
                  .body
      )
    end
  end
end