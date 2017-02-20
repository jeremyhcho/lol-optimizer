class CreateTeamStats < ActiveRecord::Migration
  def change
    create_table :team_stats do |t|
      t.integer :team_id, null: false
      t.integer :match_id, null: false
      t.integer :game_number, null: false
      t.text :stats, null: false

      t.timestamps
    end

    add_index :team_stats, [:team_id, :match_id, :game_number], unique: true
  end
end
