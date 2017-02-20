class CreateJoinTablePlayerSlate < ActiveRecord::Migration
  def change
    create_join_table :players, :slates do |t|
      t.index [:player_id, :slate_id], unique: true
    end
  end
end
