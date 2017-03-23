shared_context 'slates with data' do
  def randomized_player_stats
    {
      kills: rand(0..10),
      deaths: rand(0..10),
      assists: rand(0..15),
      cs: rand(100..200),
      ten_ka: rand(0..1),
      double_kills: rand(0..5),
      triple_kills: rand(0..1),
      quad_kills: rand(0..1),
      penta_kills: rand(0..1)
    }
  end

  def randomized_team_stats
    {
      wins: rand(0..2),
      losses: rand(0..2),
      first_bloods: rand(0..3),
      dragon_kills: rand(0..5),
      baron_kills: rand(0..5),
      towers_destroyed: rand(5..20),
      win_in_30_mins: rand(0..1)
    }
  end

  let(:slate) do
    FactoryGirl.create :slate
  end

  let(:players_slates) do
    players_slates = []

    10.times do |i|
      players_slates << FactoryGirl.create(:players_slate,
                                           slate: slate,
                                           player: players[i])
    end

    players_slates
  end

  let(:slates_teams) do
    slates_teams = []

    2.times do |i|
      slates_teams << FactoryGirl.create(:slates_team,
                                         slate: slate,
                                         team: teams[i])
    end

    slates_teams
  end

  let(:player_predictions) do
    10.times do |i|
      FactoryGirl.create :player_prediction, players_slate: players_slates[i]
    end
  end

  let(:team_predictions) do
    2.times do |i|
      FactoryGirl.create :team_prediction, slates_team: slates_teams[i]
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
        FactoryGirl.create(:player_stat,
                           {
                             player: players[i],
                             game_number: j % 3,
                             match: j < 3 ? matches[0] : matches[1]
                           }.merge(randomized_player_stats))
      end
    end
  end

  let(:team_stats) do
    2.times do |i|
      6.times do |j|
        FactoryGirl.create(:team_stat,
                           {
                             team: teams[i],
                             game_number: j % 3,
                             match: j < 3 ? matches[0] : matches[1]
                           }.merge(randomized_team_stats))
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
    player_predictions
    team_predictions
  end
end