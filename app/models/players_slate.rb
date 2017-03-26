# == Schema Information
#
# Table name: players_slates
#
#  player_id   :integer          not null
#  slate_id    :integer          not null
#  game_info   :string
#  salary      :integer
#  team_abbrev :string
#  id          :integer          not null, primary key
#

class PlayersSlate < ActiveRecord::Base
  belongs_to :player
  belongs_to :slate
  has_one :prediction,
          class_name: 'PlayerPrediction',
          foreign_key: :players_slate_id,
          primary_key: :id,
          dependent: :destroy

  def generate_prediction!
    PlayerPrediction.create!(averages.merge(players_slate_id: id))
  end

  def averages
    @averages ||= ::Admin::Stats::AverageParser.new(
      player.stats.map(&:stats),
      player.unique_matches.length
    ).perform
  end
end
