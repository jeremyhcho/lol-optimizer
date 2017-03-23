FactoryGirl.define do
  factory :player_prediction, class: 'PlayerPrediction' do
    kills { rand(0..10) }
    deaths { rand(0..10) }
    assists { rand(0..15) }
    cs { rand(100..200) }
    ten_ka { rand(0..1) }
    double_kills { rand(0..5) }
    triple_kills { rand(0..1) }
    quad_kills { rand(0..1) }
    penta_kills { rand(0..1) }
  end
end