module Predictions
  module Teams
    class ShowSerializer < BaseSerializer
      attributes :wins,
                 :losses,
                 :first_bloods,
                 :dragon_kills,
                 :baron_kills,
                 :towers_destroyed,
                 :win_in_30_mins
    end
  end
end