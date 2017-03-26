// Actions
import { PlayerConstants } from 'actions/admin/player_actions'

const _nullPlayers = Object.freeze({
  index: [],
  player: {},
  isFetching: false
})

const PlayersReducer = (state = _nullPlayers, action) => {
  switch (action.type) {
    case PlayerConstants.FETCH_PLAYER:
      return { ...state, isFetching: true }

    case PlayerConstants.RECEIVE_PLAYER:
      return { ...state, player: action.player, isFetching: false }

    default:
      return state
  }
}



export default PlayersReducer