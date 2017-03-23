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

FactoryGirl.define do
  factory :players_slate, class: 'PlayersSlate' do
    player_id { rand(111..999) }
    game_info 'nV vs FoX'
    salary 9000
    team_abbrev 'ABC'
  end

  factory :players_slate_with_data, parent: :players_slate do
    association :player, factory: :player_with_data
  end
end
