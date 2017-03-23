# == Schema Information
#
# Table name: slates
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#  start_time :datetime
#  status     :integer          default("1")
#

# Status Notes:
# 1: Processing
# 2: Ready
# 3: Failed

class Slate < ActiveRecord::Base
  validates :name, presence: true
  validates :start_time, presence: true
  validates :start_time, uniqueness: true

  has_many :players_slates, class_name: 'PlayersSlate', dependent: :destroy
  has_many :slates_teams, class_name: 'SlatesTeam', dependent: :destroy

  scope :from_date, -> (time) { where('start_time > ?', time) }
  scope :to_date, -> (time) { where('start_time < ?', time) }

  def generate_predictions!
    Slate.transaction do
      players_slates.map(&:generate_prediction!)
      slates_teams.map(&:generate_prediction!)
    end
  end
end
