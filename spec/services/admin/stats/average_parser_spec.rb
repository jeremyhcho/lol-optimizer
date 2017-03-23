require 'rails_helper'

describe Admin::Stats::AverageParser do
  subject do
    Admin::Stats::AverageParser.new(stats)
  end

  context '#perform' do
    let(:stats) do
      [
        { kills: 3, deaths: 2 },
        { kills: 2, deaths: 1 }
      ]
    end

    let(:expected_result) do
      {
        kills: 2.5,
        deaths: 1.5
      }
    end

    it 'should return the correct averages' do
      expect(subject.perform).to eq expected_result
    end
  end
end