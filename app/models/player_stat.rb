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

class PlayerStat < ActiveRecord::Base
  validates :player_id, presence: true
  validates :match_id, presence: true
  validates :game_number, presence: true
  validates :player_id, uniqueness: { scope: [:match_id, :game_number] }

  belongs_to :player, primary_key: :remote_id
  belongs_to :match, primary_key: :remote_id

  def stats
    {
      kills: kills,
      deaths: deaths,
      assists: assists,
      cs: cs,
      ten_ka: ten_ka,
      double_kills: double_kills,
      triple_kills: triple_kills,
      quad_kills: quad_kills,
      penta_kills: penta_kills
    }
  end
end
