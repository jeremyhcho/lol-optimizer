class CreatePlayerPredictions < ActiveRecord::Migration
  def change
    create_table :player_predictions do |t|
      t.integer :players_slate_id, null: false
      t.integer :kills
      t.integer :deaths
      t.integer :assists
      t.integer :cs
      t.integer :ten_ka
      t.integer :double_kills
      t.integer :triple_kills
      t.integer :quad_kills
      t.integer :penta_kills
    end

    add_index :player_predictions, :players_slate_id
  end
end
