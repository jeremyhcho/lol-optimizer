class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.integer :remote_id, null: false
      t.string :name, null: false
      t.string :position, null: false
      t.integer :team_id, null: false
      t.boolean :active, default: false

      t.timestamps
    end

    add_index :players, :remote_id
    add_index :players, :position
    add_index :players, :team_id
  end
end
