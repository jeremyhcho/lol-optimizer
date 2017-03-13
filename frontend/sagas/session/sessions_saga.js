// Saga
import { call, put, takeLatest } from 'redux-saga/effects'

// Actions
import {
  SessionConstants,
  login,
  logout,
  signup,
  receiveCurrentUser
} from 'actions/session/session_actions'

// Api
import Api from 'api/root_api'

export function* watchLoginAsync () {
  yield takeLatest(SessionConstants.LOGIN, loginAsync)
}

export function* loginAsync (action) {
  try {
    let response = yield call(Api.Sessions.post(action.user))
    yield put(receiveCurrentUser(response.data.response))
  } catch (error) {
    yield put({ type: SessionConstants.LOGIN_FAILED, response: error.response.data })
  }
}

export function* watchSignupAsync () {
  yield takeLatest(SessionConstants.SIGNUP, signupAsync)
}

export function* signupAsync (action) {
  try {
    let response = yield call(Api.Users.post(action.user))
    yield put(receiveCurrentUser(response.data.response))
  } catch (error) {
    yield put({ type: SessionConstants.SIGNUP_FAILED, response: error.response.data })
  }
}
