# == Schema Information
#
# Table name: matches
#
#  id           :integer          not null, primary key
#  remote_id    :integer          not null
#  blue_team_id :integer          not null
#  red_team_id  :integer          not null
#  time         :string           not null
#  week         :integer          not null
#  winner       :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Match < ActiveRecord::Base
  validates :remote_id, presence: true
  validates :blue_team_id, presence: true
  validates :red_team_id, presence: true
  validates :time, presence: true
  validates :week, presence: true

  belongs_to :red_team, class_name: 'Team', foreign_key: :red_team_id, primary_key: :remote_id
  belongs_to :blue_team, class_name: 'Team', foreign_key: :blue_team_id, primary_key: :remote_id

  default_scope { where(winner: 1..Float::INFINITY) }
end
