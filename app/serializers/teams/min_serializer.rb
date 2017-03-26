module Teams
  class MinSerializer < BaseSerializer
    attributes :remote_id,
               :league,
               :short_name,
               :name
  end
end