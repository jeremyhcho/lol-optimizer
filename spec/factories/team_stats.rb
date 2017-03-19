# == Schema Information
#
# Table name: team_stats
#
#  id               :integer          not null, primary key
#  team_id          :integer          not null
#  match_id         :integer          not null
#  game_number      :integer          not null
#  created_at       :datetime
#  updated_at       :datetime
#  wins             :integer
#  losses           :integer
#  first_bloods     :integer
#  dragon_kills     :integer
#  baron_kills      :integer
#  towers_destroyed :integer
#  win_in_30_mins   :integer
#

FactoryGirl.define do
  factory :team_stat, class: 'TeamStat' do
    game_number { rand(0..2) }
  end
end
