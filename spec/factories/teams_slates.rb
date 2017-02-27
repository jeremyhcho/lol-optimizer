FactoryGirl.define do
  factory :slates_team, class: 'SlatesTeam' do
    team_id { rand(111..999) }
    game_info 'nV vs FOX'
    salary 2000
    team_abbrev 'ABC'
  end
end