module Season
  class BaseSync
    attr_reader :season, :data

    def initialize(opts)
      @season = opts[:season]
      @data = opts[:data] || data
    end

    private

    def data
      @data ||= JSON.parse(
        RestClient.get("fantasy.na.lolesports.com/en-US/api/season/#{season}")
                  .body
      )
    end
  end
end