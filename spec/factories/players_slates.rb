FactoryGirl.define do
  factory :players_slate, class: 'PlayersSlate' do
    player_id { rand(111..999) }
    game_info 'nV vs FoX'
    salary 9000
    team_abbrev 'ABC'
  end
end