require 'rails_helper'

describe Api::V1::Admin::SlatesController, type: :controller do
  def parse_date(date_str)
    DateTime.parse(date_str)
  end

  context '#index' do
    let(:api_call) do
      get :index, params
    end

    let!(:slate_1) do
      FactoryGirl.create :slate,
                         start_time: parse_date('Sat Feb 25 2017 17:41:36 GMT-0800 (PST)')
    end

    let!(:slate_2) do
      FactoryGirl.create :slate,
                         start_time: parse_date('Sun Feb 26 2017 17:41:36 GMT-0800 (PST)')
    end

    let!(:slate_3) do
      FactoryGirl.create :slate,
                         start_time: parse_date('Mon Feb 27 2017 17:41:36 GMT-0800 (PST)')
    end

    context 'when from and to span multiple days' do
      let(:params) do
        {
          from: '2017-02-25',
          to: '2017-02-26'
        }
      end

      let(:expected_response) do
        [
          {
            'id' => slate_1.id,
            'name' => slate_1.name,
            'start_time' => '2017-02-25T17:41:36.000-08:00'
          },
          {
            'id' => slate_2.id,
            'name' => slate_2.name,
            'start_time' => '2017-02-26T17:41:36.000-08:00'
          }
        ]
      end

      it 'should return two slates' do
        api_call

        expect(parsed_response).to eq expected_response
      end
    end

    context 'when from and to are the same day' do
      let(:params) do
        {
          from: '2017-02-25',
          to: '2017-02-25'
        }
      end

      let(:expected_response) do
        [{
          'id' => slate_1.id,
          'name' => slate_1.name,
          'start_time' => '2017-02-25T17:41:36.000-08:00'
        }]
      end

      it 'should return one slate' do
        api_call

        expect(parsed_response).to eq expected_response
      end
    end
  end

  context '#show' do
    let(:api_call) do
      get :show, id: slate.id
    end

    let(:slate) do
      FactoryGirl.create :slate, start_time: parse_date('Sat Feb 25 2017 17:41:36 GMT-0800 (PST)')
    end

    before do
      3.times do |i|
        FactoryGirl.create :players_slate, slate: slate, player_id: i + 1
      end

      2.times do |i|
        FactoryGirl.create :slates_team, slate: slate, team_id: i + 1
      end
    end

    it 'should expose the slate info and all of the players and teams in the slate' do
      api_call

      expect(parsed_response['players'].length).to eq 3
      expect(parsed_response['teams'].length).to eq 2
    end
  end

  context '#update' do
    let(:api_call) do
      put :update, params
    end

    let(:params) do
      {
        id: slate.id,
        slate: {
          name: 'My Changed Slate Name'
        }
      }
    end

    let(:slate) do
      FactoryGirl.create :slate, start_time: parse_date('Sat Feb 25 2017 17:41:36 GMT-0800 (PST)')
    end

    it 'should change the name of the slate' do
      api_call
      slate.reload

      expect(slate.name).to eq 'My Changed Slate Name'
    end
  end

  context '#destroy' do
    let(:api_call) do
      delete :destroy, id: slate.id
    end

    let(:slate) do
      FactoryGirl.create :slate, start_time: parse_date('Sat Feb 25 2017 17:41:36 GMT-0800 (PST)')
    end

    before do
      3.times do |i|
        FactoryGirl.create :players_slate, slate: slate, player_id: i + 1
      end

      2.times do |i|
        FactoryGirl.create :slates_team, slate: slate, team_id: i + 1
      end
    end

    it 'should successfully destroy the slate' do
      expect { api_call }.to change { Slate.count }.by(-1)
    end

    it 'should destroy the PlayersSlate in the slate' do
      expect { api_call }.to change { PlayersSlate.count }.by(-3)
    end

    it 'should destroy the SlatesTeam in the slate' do
      expect { api_call }.to change { SlatesTeam.count }.by(-2)
    end
  end
end