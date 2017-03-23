class AddPrimaryKeyToPlayersSlatesAndSlatesTeams < ActiveRecord::Migration
  def change
    add_column :players_slates, :id, :primary_key
    add_column :slates_teams, :id, :primary_key
  end
end
