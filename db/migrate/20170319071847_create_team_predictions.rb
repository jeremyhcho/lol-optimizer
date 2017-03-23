class CreateTeamPredictions < ActiveRecord::Migration
  def change
    create_table :team_predictions do |t|
      t.integer :slates_team_id, null: false
      t.integer :wins
      t.integer :losses
      t.integer :first_bloods
      t.integer :dragon_kills
      t.integer :baron_kills
      t.integer :towers_destroyed
      t.integer :win_in_30_mins
    end

    add_index :team_predictions, :slates_team_id
  end
end
