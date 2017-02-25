# == Schema Information
#
# Table name: players_slates
#
#  player_id   :integer          not null
#  slate_id    :integer          not null
#  game_info   :string
#  salary      :integer
#  team_abbrev :string
#

class PlayersSlate < ActiveRecord::Base
  belongs_to :player
  belongs_to :slate
end
