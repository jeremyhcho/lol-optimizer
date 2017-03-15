FactoryGirl.define do
  factory :player, class: 'Player' do
    remote_id { rand(111..999) }
    name { Faker::Internet.user_name }
    position { %w(TOP MID JNG ADC SUP).sample }
    active true
  end

  factory :player_with_data, parent: :player do
    after(:create) do |player|
      3.times do
        create(:player_stat, player: player)
      end
    end
  end
end