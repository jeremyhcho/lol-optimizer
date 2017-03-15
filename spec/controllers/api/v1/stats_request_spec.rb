require 'rails_helper'

describe Api::V1::StatsController, type: :controller do
  include_context 'slates with data'

  context '#index' do
    context 'actual' do
      let(:params) do
        {
          stat_type: 'actual',
          games_back: 1,
          date: 'DOESNT_MATTER',
          slate_id: 0
        }
      end

      let(:api_call) do
        get :index, params
      end

      before do
        api_call
      end

      it 'should return the accumulated stats for the last two games' do
        # Players and Teams should come in an array
        expect(parsed_response['players']).to be_a_kind_of Array
        expect(parsed_response['teams']).to be_a_kind_of Array

        # Stats should all have two games
        expect(parsed_response['players'].map { |player| player['stats'].length }).to all be 3
        expect(parsed_response['teams'].map { |team| team['stats'].length }).to all be 3
      end
    end

    context 'predicted' do
    end
  end

  context '#show' do
  end
end