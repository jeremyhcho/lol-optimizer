# == Schema Information
#
# Table name: team_stats
#
#  id          :integer          not null, primary key
#  team_id     :integer          not null
#  match_id    :integer          not null
#  game_number :integer          not null
#  stats       :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class TeamStat < ActiveRecord::Base
  validates :team_id, uniqueness: { scope: [:match_id, :game_number] }
  validates :team_id, presence: true
  validates :match_id, presence: true
  validates :game_number, presence: true

  serialize :stats, Array

  belongs_to :team, primary_key: :remote_id
  belongs_to :match, primary_key: :remote_id
end
