require 'rails_helper'

describe Slates::Admin::Import do
  subject { Slates::Admin::Import.new(opts) }

  let(:opts) do
    {
      csv_url: 'slate-sample-bucket.amazon.s3.com/slates/slate_file.csv',
      name: 'My First Slate',
      start_time: 'Tue Feb 21 2017 17:29:11 GMT-0800 (PST)'
    }
  end

  context '#perform' do
    let(:csv_stub) do
      Player.all.map do |player|
        {
          'Position' => player.position,
          'Name' => player.name,
          'Salary' => rand(3500..12000).to_s,
          'GameInfo' => 'nV@FOX 05:00PM ET',
          'teamAbbrev' => 'ABC'
        }
      end.concat(
        Team.all.map do |team|
          {
            'Position' => 'TEAM',
            'Name' => team.name,
            'Salary' => rand(3500..12000).to_s,
            'GameInfo' => 'nV@FOX 05:00PM ET',
            'teamAbbrev' => 'ABC'
          }
        end
      )
    end

    before do
      allow(subject).to receive(:rows).and_return(csv)
    end

    context 'when theres an existing slate' do
      let(:csv) { csv_stub }

      let!(:existing_slate) do
        FactoryGirl.create :slate,
                           name: 'Some Existing Slate',
                           start_time: '2017-02-21 05:29:11-08:00'
      end

      it 'should destroy the existing slate and create a new slate' do
        expect { subject.perform }.to change { Slate.count }.by(0)
      end
    end

    context 'when a team is not found by name' do
      let(:csv) do
        team_index = csv_stub.find_index { |row| row['Position'] == 'TEAM' }
        csv_stub[team_index]['Name'] = 'Lol this name doesnt exist'
        csv_stub
      end

      it 'should return false' do
        expect(subject.perform).to eq false
      end
    end

    context 'when a player is not found by name' do
      let(:csv) do
        csv_stub.first['Name'] = 'Lol this name doesnt exist'
        csv_stub
      end

      it 'should return false' do
        expect(subject.perform).to eq false
      end
    end

    context 'when everything succeeds' do
      let(:csv) { csv_stub }

      it 'should create a slate accordingly' do
        expect { subject.perform }.to change { Slate.count }.by(1)
      end

      it 'should create the correct amount of PlayerSlates' do
        expect { subject.perform }.to change { PlayersSlate.count }.by(25)
      end

      it 'should create the correct amount of SlatesTeams' do
        expect { subject.perform }.to change { SlatesTeam.count }.by(5)
      end
    end
  end
end