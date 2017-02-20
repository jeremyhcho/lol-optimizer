class CreatePlayerStats < ActiveRecord::Migration
  def change
    create_table :player_stats do |t|
      t.integer :player_id, null: false
      t.integer :team_id, null: false
      t.integer :match_id, null: false
      t.integer :game_number, null: false
      t.text :stats, null: false

      t.timestamps
    end

    add_index :player_stats, [:player_id, :match_id, :game_number], unique: true
  end
end
