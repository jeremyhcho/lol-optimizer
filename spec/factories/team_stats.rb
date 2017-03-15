FactoryGirl.define do
  factory :team_stat, class: 'TeamStat' do
    game_number { rand(0..2) }
  end
end