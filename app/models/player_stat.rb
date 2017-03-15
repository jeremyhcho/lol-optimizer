# == Schema Information
#
# Table name: player_stats
#
#  id          :integer          not null, primary key
#  player_id   :integer          not null
#  team_id     :integer          not null
#  match_id    :integer          not null
#  game_number :integer          not null
#  stats       :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class PlayerStat < ActiveRecord::Base
  validates :player_id, presence: true
  validates :match_id, presence: true
  validates :game_number, presence: true
  validates :stats, presence: true
  validates :player_id, uniqueness: { scope: [:match_id, :game_number] }

  serialize :stats, Array

  belongs_to :player, primary_key: :remote_id
  belongs_to :match, primary_key: :remote_id
end
