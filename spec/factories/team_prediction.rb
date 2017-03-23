FactoryGirl.define do
  factory :team_prediction, class: 'TeamPrediction' do
    wins { rand(0..2) }
    losses { rand(0..2) }
    first_bloods { rand(0..3) }
    dragon_kills { rand(0..5) }
    baron_kills { rand(0..5) }
    towers_destroyed { rand(5..20) }
    win_in_30_mins { rand(0..1) }
  end
end