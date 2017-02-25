module Users
  class ShowSerializer < BaseSerializer
    attributes :id, :email, :is_admin
  end
end