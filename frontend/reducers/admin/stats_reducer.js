// Actions
import { StatConstants } from 'actions/admin/stat_actions'

const _nullStats = Object.freeze({
  players: [],
  teams: [],
  statType: 'actual',
  isFetching: false,
  gamesBack: -1,
  date: new Date(),
  slateId: 0,
  searchText: ''
})

let newParams

const StatsReducer = (state = _nullStats, action) => {
  switch (action.type) {
    case StatConstants.FETCH_STATS:
      return { ...state, isFetching: true }
      
    case StatConstants.STATS_RECEIVED:
      return {
        ...state,
        players: action.stats.players,
        teams: action.stats.teams,
        isFetching: false
      }
    
    case StatConstants.CHANGE_PARAMS:
      return { ...state, [action.key]: action.value }
      
    case StatConstants.RESET_STATS:
      return _nullStats

    default:
      return state
  }
}



export default StatsReducer