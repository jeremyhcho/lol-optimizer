class CreateJoinTableSlatesTeams < ActiveRecord::Migration
  def change
    create_join_table :slates, :teams do |t|
      t.index [:slate_id, :team_id], unique: true
    end
  end
end
