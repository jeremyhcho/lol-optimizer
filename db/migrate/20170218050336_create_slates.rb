class CreateSlates < ActiveRecord::Migration
  def change
    create_table :slates do |t|
      t.string :start_time, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
