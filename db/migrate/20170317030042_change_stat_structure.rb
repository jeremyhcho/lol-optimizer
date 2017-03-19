class ChangeStatStructure < ActiveRecord::Migration
  def up
    remove_column :player_stats, :stats
    remove_column :team_stats, :stats

    add_column :player_stats, :kills, :integer
    add_column :player_stats, :deaths, :integer
    add_column :player_stats, :assists, :integer
    add_column :player_stats, :cs, :integer
    add_column :player_stats, :ten_ka, :integer
    add_column :player_stats, :double_kills, :integer
    add_column :player_stats, :triple_kills, :integer
    add_column :player_stats, :quad_kills, :integer
    add_column :player_stats, :penta_kills, :integer

    add_column :team_stats, :wins, :integer
    add_column :team_stats, :losses, :integer
    add_column :team_stats, :first_bloods, :integer
    add_column :team_stats, :dragon_kills, :integer
    add_column :team_stats, :baron_kills, :integer
    add_column :team_stats, :towers_destroyed, :integer
    add_column :team_stats, :win_in_30_mins, :integer
  end

  def down
    add_column :player_stats, :text, :stats
    add_column :team_stats, :text, :stats

    remove_column :player_stats, :kills
    remove_column :player_stats, :deaths
    remove_column :player_stats, :assists
    remove_column :player_stats, :cs
    remove_column :player_stats, :ten_ka
    remove_column :player_stats, :double_kills
    remove_column :player_stats, :triple_kills
    remove_column :player_stats, :quad_kills
    remove_column :player_stats, :penta_kills

    remove_column :team_stats, :wins
    remove_column :team_stats, :losses
    remove_column :team_stats, :first_bloods
    remove_column :team_stats, :dragon_kills
    remove_column :team_stats, :baron_kills
    remove_column :team_stats, :towers_destroyed
    remove_column :team_stats, :win_in_30_mins
  end
end
