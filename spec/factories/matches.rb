# == Schema Information
#
# Table name: matches
#
#  id           :integer          not null, primary key
#  remote_id    :integer          not null
#  blue_team_id :integer          not null
#  red_team_id  :integer          not null
#  time         :string           not null
#  week         :integer          not null
#  winner       :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

FactoryGirl.define do
  factory :match, class: 'Match' do
    remote_id { rand(111..999) }
    time { Time.at((Time.now.utc.to_f - (Time.now.utc - 7.days).to_f)*rand + (Time.now.utc - 7.days).to_f).utc.to_s }
    week { rand(1..15) }
    winner { rand(0..10) }
  end
end
