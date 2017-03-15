# == Schema Information
#
# Table name: slates
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#  start_time :datetime
#

class Slate < ActiveRecord::Base
  validates :name, presence: true
  validates :start_time, presence: true
  validates :start_time, uniqueness: true

  has_many :players_slates, class_name: 'PlayersSlate'
  has_many :slates_teams, class_name: 'SlatesTeam'

  has_and_belongs_to_many :players
  has_and_belongs_to_many :teams

  scope :from_date, -> (time) { where('start_time > ?', time) }
  scope :to_date, -> (time) { where('start_time < ?', time) }
end
