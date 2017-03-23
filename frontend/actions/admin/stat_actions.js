export const StatConstants = {
  CHANGE_PARAMS: 'CHANGE_PARAMS',
  FETCH_STATS: 'FETCH_STATS',
  STATS_RECEIVED: 'STATS_RECEIVED',
  RESET_STATS: 'RESET_STATS'
}

export const changeParams = (key, value) => ({
  type: StatConstants.CHANGE_PARAMS,
  key,
  value
})

export const fetchStats = (params) => ({
  type: StatConstants.FETCH_STATS,
  params
})

export const statsReceived = (stats) => ({
  type: StatConstants.STATS_RECEIVED,
  stats
})

export const resetStats = () => ({
  type: StatConstants.RESET_STATS
})