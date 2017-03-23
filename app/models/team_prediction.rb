# == Schema Information
#
# Table name: team_predictions
#
#  id               :integer          not null, primary key
#  slates_team_id   :integer          not null
#  wins             :integer
#  losses           :integer
#  first_bloods     :integer
#  dragon_kills     :integer
#  baron_kills      :integer
#  towers_destroyed :integer
#  win_in_30_mins   :integer
#

class TeamPrediction < ActiveRecord::Base
  validates :slates_team_id, presence: true
  belongs_to :slates_team, class_name: 'SlatesTeam', foreign_key: :slates_team_id
end
