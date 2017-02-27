module Slates
  class ShowSerializer < BaseSerializer
    attributes :id, :name, :start_time

    has_many :players
    has_many :teams

    def include_players?
      options[:with_players].present?
    end

    def include_teams?
      options[:with_teams].present?
    end
  end
end