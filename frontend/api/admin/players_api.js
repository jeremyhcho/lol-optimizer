import Axios from 'axios'

const basePath = '/api/v1/players'

const PlayersApi = {
  fetchPlayer: (playerId, params) => (
    () => Axios.get(`${basePath}/${playerId}`, { params: params })
  )
}

export default PlayersApi