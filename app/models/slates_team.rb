# == Schema Information
#
# Table name: slates_teams
#
#  slate_id    :integer          not null
#  team_id     :integer          not null
#  game_info   :string
#  salary      :integer
#  team_abbrev :string
#  id          :integer          not null, primary key
#

class SlatesTeam < ActiveRecord::Base
  belongs_to :slate
  belongs_to :team
  has_one :prediction,
          class_name: 'TeamPrediction',
          foreign_key: :slates_team_id,
          primary_key: :id,
          dependent: :destroy

  def generate_prediction!
    TeamPrediction.create!(averages.merge(slates_team_id: id))
  end

  def averages
    @averages ||= ::Admin::Stats::AverageParser.new(
      team.stats.map(&:stats),
      team.unique_matches.length
    ).perform
  end
end
