# == Schema Information
#
# Table name: players_slates
#
#  player_id :integer          not null
#  slate_id  :integer          not null
#

class PlayersSlate < ActiveRecord::Base
  belongs_to :player
  belongs_to :slate
end
