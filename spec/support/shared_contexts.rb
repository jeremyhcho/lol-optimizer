shared_context 'slates with data' do
  def randomized_player_stats
    [10, 10, 15, 200, 5, 5, 5, 5, 5].map do |cap|
      rand(0..cap)
    end
  end

  def randomized_team_stats
    [5, 15, 5, 5, 5, 5, 5].map do |cap|
      rand(0..cap)
    end
  end

  let(:slate) do
    FactoryGirl.create :slate
  end

  let(:players_slates) do
    10.times do |i|
      FactoryGirl.create :players_slate,
                         slate: slate,
                         player: players[i]
    end
  end

  let(:slates_teams) do
    2.times do |i|
      FactoryGirl.create :slates_team, slate: slate, team: teams[i]
    end
  end

  let(:players) do
    players = []

    10.times do |i|
      players << FactoryGirl.create(:player, team: i < 5 ? teams[0] : teams[1])
    end

    players
  end

  let(:teams) do
    teams = []

    2.times do
      teams << FactoryGirl.create(:team)
    end

    teams
  end

  let(:player_stats) do
    10.times do |i|
      6.times do |j|
        FactoryGirl.create :player_stat,
                           stats: randomized_player_stats,
                           player: players[i],
                           game_number: j % 3,
                           match: j < 3 ? matches[0] : matches[1]
      end
    end
  end

  let(:team_stats) do
    2.times do |i|
      6.times do |j|
        FactoryGirl.create :team_stat,
                           stats: randomized_team_stats,
                           team: teams[i],
                           game_number: j % 3,
                           match: j < 3 ? matches[0] : matches[1]
      end
    end
  end

  let(:matches) do
    matches = []

    2.times do
      matches << FactoryGirl.create(:match,
                                    red_team: teams[0],
                                    blue_team: teams[1],
                                    winner: teams[0].remote_id)
    end

    matches
  end

  before do
    players_slates
    slates_teams
    player_stats
    team_stats
  end
end