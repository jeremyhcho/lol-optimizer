FactoryGirl.define do
  factory :match, class: 'Match' do
    remote_id { rand(111..999) }
    time { Time.at((Time.now.utc.to_f - (Time.now.utc - 7.days).to_f)*rand + (Time.now.utc - 7.days).to_f).utc.to_s }
    week { rand(1..15) }
    winner { rand(0..10) }
  end
end