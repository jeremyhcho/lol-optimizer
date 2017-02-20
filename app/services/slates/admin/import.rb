module Slates
  module Admin
    class Import
      attr_reader :csv_url

      def initialize(opts)
        @csv_url = opts[:csv_url]
        @name = opts[:name]
        @start_time = opts[:start_time]
      end

      def perform
        Slate.transaction do
          # Destroy existing slate for this time if one already exists. FE
          # should have warned admin user.
          _destroy_existing_slate!

          # Create new slate for this time
          _create_slate!

          rows.each do |row|
            case row['Position']
            when 'TEAM'
              _create_slates_team!(row)
            else
              _create_players_slate!(row)
            end
          end
        end
      rescue => e
        raise "Error occurred while uploading slate: #{e.message}"
      end

      private

      def csv_data
        @csv_data ||= open(csv_url).read.force_encoding('utf-8')
      rescue
        nil
      end

      def rows
        @rows ||= CSV.parse(csv_data, headers: true).map do |row|
          row.to_hash
        end
      end

      def _create_slate!
        @slate = Slate.create!(
          name: name,
          start_time: start_time
        )
      end

      def _create_slates_team!(row)
        team = Team.find_by(name: row['Name'])

        SlatesTeam.create!(
          slate_id: @slate.id,
          team_id: team.id,
          game_info: row['GameInfo']
        )
      end

      def _create_players_slate!(row)
        # Update position of the player in case it's changed since the last
        # slate.
        player = Player.find_by(name: row['Name'])
        player.position = row['Position']
        player.save!

        PlayersSlate.create!(
          slate_id: @slate.id,
          player_id: player.id,
          game_info: row['GameInfo']
        )
      end

      def _destroy_existing_slate!
        Slate.find_by(start_time: start_time).try(:destroy)
      end
    end
  end
end
