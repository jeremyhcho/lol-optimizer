# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  remote_id  :integer          not null
#  league     :string           not null
#  short_name :string
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#  active     :boolean          default("false")
#  position   :string           default("TEAM")
#

class Team < ActiveRecord::Base
  validates :remote_id, presence: true
  validates :league, presence: true
  validates :name, presence: true

  has_many :players, primary_key: :remote_id
  has_many :red_team_matches, class_name: 'Match', foreign_key: :red_team_id, primary_key: :remote_id
  has_many :blue_team_matches, class_name: 'Match', foreign_key: :blue_team_id, primary_key: :remote_id
  has_many :stats, class_name: 'TeamStat', primary_key: :remote_id
  has_many :matches, through: :stats

  scope :active, -> { where(active: true) }

  def unique_matches
    matches.uniq
  end
end
