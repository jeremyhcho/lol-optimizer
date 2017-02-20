class AddUniqueValidationToSlateStartTime < ActiveRecord::Migration
  def change
    add_index :slates, :start_time, unique: true
  end
end
