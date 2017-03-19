# == Schema Information
#
# Table name: slates
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#  start_time :datetime
#

FactoryGirl.define do
  factory :slate, class: 'Slate' do
    name { Faker::Pokemon.name }
    start_time { DateTime.now.utc }
  end

  factory :slate_with_data, class: 'Slate' do
    name { Faker::Pokemon.name }

    after(:create) do |slate|
      2.times do
        create(:players_slate_with_data, slate: slate)
      end
    end

    after(:create) do |slate|
      2.times do
        create(:slates_team_with_data, slate: slate)
      end
    end
  end
end
