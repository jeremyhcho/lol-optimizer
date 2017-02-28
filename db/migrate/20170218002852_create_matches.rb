class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :remote_id, null: false
      t.integer :blue_team_id, null: false
      t.integer :red_team_id, null: false
      t.string :time, null: false
      t.integer :week, null: false
      t.string :winner, null: false

      t.timestamps
    end

    add_index :matches, :remote_id
    add_index :matches, :winner
    add_index :matches, :week
  end
end
