class AddGameInfoColumnToSlateJoinTables < ActiveRecord::Migration
  def change
    add_column :slates_teams, :game_info, :string
    add_column :players_slates, :game_info, :string
  end
end
