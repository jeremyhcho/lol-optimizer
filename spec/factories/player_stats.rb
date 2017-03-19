# == Schema Information
#
# Table name: player_stats
#
#  id           :integer          not null, primary key
#  player_id    :integer          not null
#  team_id      :integer
#  match_id     :integer          not null
#  game_number  :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#  kills        :integer
#  deaths       :integer
#  assists      :integer
#  cs           :integer
#  ten_ka       :integer
#  double_kills :integer
#  triple_kills :integer
#  quad_kills   :integer
#  penta_kills  :integer
#

FactoryGirl.define do
  factory :player_stat, class: 'PlayerStat' do
    game_number { rand(1..3) }
  end
end
