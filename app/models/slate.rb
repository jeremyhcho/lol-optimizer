# == Schema Information
#
# Table name: slates
#
#  id         :integer          not null, primary key
#  start_time :string           not null
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class Slate < ActiveRecord::Base
  validates :name, presence: true
  validates :start_time, presence: true
  validates :start_time, uniqueness: true

  has_and_belongs_to_many :players
  has_and_belongs_to_many :teams
end
