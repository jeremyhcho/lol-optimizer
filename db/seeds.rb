# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

positions = ['ADC', 'MID', 'JNG', 'TOP', 'SUP']

5.times do
  team = Team.create(
    name: Faker::Team.name,
    remote_id: rand(111...999).to_s,
    league: 'NA',
    active: true
  )

  5.times do |i|
    Player.create(
      name: Faker::Internet.user_name,
      remote_id: rand(111..999).to_s,
      team_id: team.id,
      position: positions[i],
      active: true
    )
  end
end