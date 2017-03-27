// Actions
import { SessionConstants } from 'actions/session/session_actions'

const _nullUser = Object.freeze({
  currentUser: null
})

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      let currentUser = action.user
      return { ...state, currentUser }

    case SessionConstants.LOGOUT:
      return { ...state, currentUser: null }

    default:
      return state
  }
}



export default SessionReducer
