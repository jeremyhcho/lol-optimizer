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

class TeamStat < ActiveRecord::Base
  validates :team_id, uniqueness: { scope: [:match_id, :game_number] }
  validates :team_id, presence: true
  validates :match_id, presence: true
  validates :game_number, presence: true

  belongs_to :team, primary_key: :remote_id
  belongs_to :match, primary_key: :remote_id

  def stats
    {
      wins: wins,
      losses: losses,
      first_bloods: first_bloods,
      dragon_kills: dragon_kills,
      baron_kills: baron_kills,
      towers_destroyed: towers_destroyed,
      win_in_30_mins: win_in_30_mins
    }
  end
end
