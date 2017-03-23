require 'rails_helper'

describe Api::V1::StatsController, type: :controller do
  include_context 'slates with data'

  context '#index' do
    let(:api_call) do
      get :index, params
    end

    before do
      api_call
    end

    context 'actual' do
      let(:params) do
        {
          stat_type: 'actual',
          games_back: 1
        }
      end

      it 'should return the accumulated stats for the last two games' do
        # Players and Teams should come in an array
        expect(parsed_response['players']).to be_a_kind_of Array
        expect(parsed_response['teams']).to be_a_kind_of Array

        # Stats should all be hashes
        expect(parsed_response['players'].map { |player| player['stats'] })
          .to all be_a_kind_of Hash

        expect(parsed_response['teams'].map { |team| team['stats'] })
          .to all be_a_kind_of Hash
      end
    end

    context 'predicted' do
      let(:params) do
        {
          stat_type: 'predicted',
          slate_id: slate.id
        }
      end

      it 'should return the predicted stats' do
        # Players and Teams should come in an array
        expect(parsed_response['players']).to be_a_kind_of Array
        expect(parsed_response['teams']).to be_a_kind_of Array

        # Stats should all be hashes
        expect(parsed_response['players'].map { |player| player['stats'] })
          .to all be_a_kind_of Hash

        expect(parsed_response['teams'].map { |team| team['stats'] })
          .to all be_a_kind_of Hash
      end
    end
  end

  context '#show' do
  end
end
