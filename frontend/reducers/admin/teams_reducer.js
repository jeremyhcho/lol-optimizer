// Actions
import { TeamConstants } from 'actions/admin/team_actions'

const _nullTeams = Object.freeze({
  index: [],
  team: {},
  isFetching: false
})

const TeamsReducer = (state = _nullTeams, action) => {
  switch (action.type) {
    case TeamConstants.FETCH_TEAM:
      return { ...state, isFetching: true }

    case TeamConstants.RECEIVE_TEAM:
      return { ...state, team: action.team, isFetching: false }

    default:
      return state
  }
}



export default TeamsReducer