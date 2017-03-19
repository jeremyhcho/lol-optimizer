# == Schema Information
#
# Table name: players
#
#  id         :integer          not null, primary key
#  remote_id  :integer          not null
#  name       :string           not null
#  position   :string
#  team_id    :integer          not null
#  active     :boolean          default("false")
#  created_at :datetime
#  updated_at :datetime
#

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
