FactoryGirl.define do
  factory :team, class: 'Team' do
    remote_id { rand(111..999) }
    league 'NA'
    short_name 'ABC'
    name { Faker::Team.name }
    position 'TEAM'
    active true
  end

  factory :team_with_data, parent: :team do
    after(:create) do |team|
      3.times do
        create(:team_stat, team: team)
      end
    end
  end
end