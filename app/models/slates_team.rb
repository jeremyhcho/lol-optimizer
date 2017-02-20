# == Schema Information
#
# Table name: slates_teams
#
#  slate_id :integer          not null
#  team_id  :integer          not null
#

class SlatesTeam < ActiveRecord::Base
  belongs_to :slate
  belongs_to :team
end
