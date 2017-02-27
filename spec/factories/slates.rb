FactoryGirl.define do
  factory :slate, class: 'Slate' do
    name { Faker::Pokemon.name }
  end
end