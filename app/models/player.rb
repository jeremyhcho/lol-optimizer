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

class Player < ActiveRecord::Base
  validates :remote_id, presence: true
  validates :team_id, presence: true
  validates :name, presence: true

  belongs_to :team, primary_key: :remote_id
  has_many :stats, class_name: 'PlayerStat', primary_key: :remote_id
  has_many :red_team_matches,
           through: :team,
           primary_key: 'team_id',
           foreign_key: 'red_team_id',
           class_name: 'Match'

  has_many :blue_team_matches,
           through: :team,
           primary_key: 'team_id',
           foreign_key: 'blue_team_id',
           class_name: 'Match'

  has_and_belongs_to_many :slates, primary_key: :remote_id

  scope :active, -> { where(active: true) }

  def matches
    red_team_matches | blue_team_matches
  end
end
