FactoryGirl.define do
  factory :player_stat, class: 'PlayerStat' do
    game_number { rand(1..3) }
  end
end