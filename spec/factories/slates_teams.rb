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

FactoryGirl.define do
  factory :slates_team, class: 'SlatesTeam' do
    game_info 'nV vs FOX'
    salary 2000
    team_abbrev 'ABC'
  end
end
