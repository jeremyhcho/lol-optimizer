module Predictions
  module Players
    class ShowSerializer < BaseSerializer
      attributes :kills,
                 :deaths,
                 :assists,
                 :cs,
                 :ten_ka,
                 :double_kills,
                 :triple_kills,
                 :quad_kills,
                 :penta_kills
    end
  end
end