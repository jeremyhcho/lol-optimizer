module Api
  module V1
    class PlayersController < ApiBaseController
      before_action :load_player

      def show
        expose ::Players::ShowSerializer
          .new(@player, _serializer_options).serializable_hash
      end

      private

      def load_player
        @player ||= Player.includes(*_associations).find_by(remote_id: params[:id])
        error! :not_found unless @player
      end

      def _associations
        # Optional & dynamic includes to only eager load what's necessary for
        # the specific request
        params.select { |key, val| key =~ /includes_/ }.map do |key, val|
          key.split('includes_')[1].to_sym
        end
      end

      def _serializer_options
        HashWithIndifferentAccess.new(JSON.parse(params[:serializer_options]))
      end
    end
  end
end
