class AddSalaryAndTeamColumnsToJoinTables < ActiveRecord::Migration
  def change
    add_column :slates_teams, :salary, :integer
    add_column :slates_teams, :team_abbrev, :string
    add_column :players_slates, :salary, :integer
    add_column :players_slates, :team_abbrev, :string
  end
end
