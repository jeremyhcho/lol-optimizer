class RemoveTeamIdValidationOnPlayerStats < ActiveRecord::Migration
  def change
    change_column :player_stats, :team_id, :integer, null: true
  end
end
