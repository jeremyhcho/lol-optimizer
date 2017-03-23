# == Schema Information
#
# Table name: player_predictions
#
#  id               :integer          not null, primary key
#  players_slate_id :integer          not null
#  kills            :integer
#  deaths           :integer
#  assists          :integer
#  cs               :integer
#  ten_ka           :integer
#  double_kills     :integer
#  triple_kills     :integer
#  quad_kills       :integer
#  penta_kills      :integer
#

class PlayerPrediction < ActiveRecord::Base
  validates :players_slate_id, presence: true
  belongs_to :players_slate, class_name: 'PlayersSlate', foreign_key: :players_slate_id
end
