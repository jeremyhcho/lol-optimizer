class RemoveNullValidationOnPlayerPosition < ActiveRecord::Migration
  def change
    change_column :players, :position, :string, null: true
  end
end
