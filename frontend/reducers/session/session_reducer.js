// Actions
import { SessionConstants } from 'actions/session/session_actions'

const _nullUser = Object.freeze({
  currentUser: null,
  loginError: null,
  signupError: null
})

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      let currentUser = action.user
      return { ...state, currentUser }

    case SessionConstants.LOGOUT:
      return { ...state, currentUser: null }

    case SessionConstants.LOGIN_FAILED:
      let loginError = action.response
      return { ...state, loginError }

    case SessionConstants.SIGNUP_FAILED:
      let signupError = action.response
      return { ...state, signupError }

    default:
      return state
  }
}



export default SessionReducer
