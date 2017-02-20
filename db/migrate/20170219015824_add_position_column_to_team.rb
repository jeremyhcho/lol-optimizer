class AddPositionColumnToTeam < ActiveRecord::Migration
  def change
    add_column :teams, :position, :string, default: 'TEAM'
  end
end
