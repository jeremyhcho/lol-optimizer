class ChangeSlateStartTimeToTypeDateTime < ActiveRecord::Migration
  def change
    remove_column :slates, :start_time
    add_column :slates, :start_time, :datetime
  end
end
