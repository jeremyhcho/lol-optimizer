class AddSlateStateColumn < ActiveRecord::Migration
  def change
    add_column :slates, :status, :integer, default: 1
  end
end
