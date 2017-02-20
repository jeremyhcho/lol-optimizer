class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.integer :remote_id, null: false
      t.string :league, null: false
      t.string :short_name
      t.string :name, null: false

      t.timestamps
    end

    add_index :teams, :remote_id
    add_index :teams, :league
  end
end
