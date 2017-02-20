module Users
  class ShowSerializer < BaseSerializer
    attributes :id, :email, :full_name
  end
end