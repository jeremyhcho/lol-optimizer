import Axios from 'axios'

const basePath = '/api/v1/stats'

const StatsApi = {
  fetchStats: (params) => (
    () => Axios.get(basePath, { params: params })
  ),
  fetchPlayerStats: (playerId) => (
    () => Axios.get(`${basePath}/${playerId}`, { params: { type: 'Player' }})
  )
}

export default StatsApi