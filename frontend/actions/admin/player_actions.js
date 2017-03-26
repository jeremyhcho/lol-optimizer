export const PlayerConstants = {
  FETCH_PLAYER: 'FETCH_PLAYER',
  RECEIVE_PLAYER: 'RECEIVE_PLAYER'
}

export const fetchPlayer = (playerId, params = {}) => ({
  type: PlayerConstants.FETCH_PLAYER,
  playerId,
  params
})

export const receivePlayer = (player) => ({
  type: PlayerConstants.RECEIVE_PLAYER,
  player
})