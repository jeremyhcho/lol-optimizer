// Saga
import { call, put, takeLatest } from 'redux-saga/effects'

// Api
import Api from 'api/root_api'

// Actions
import {
  SessionConstants,
  login,
  logout,
  signup,
  receiveCurrentUser
} from 'actions/session/session_actions'
import { openSnackbar } from 'actions/snackbar_actions'

export default function* sessionSaga () {
  yield [
    watchLoginAsync(),
    watchSignupAsync()
  ]
}

function* watchLoginAsync () {
  yield takeLatest(SessionConstants.LOGIN, loginAsync)
}

function* loginAsync (action) {
  try {
    let response = yield call(Api.Sessions.post(action.user))
    yield put(receiveCurrentUser(response.data.response))
  } catch (error) {
    yield put(openSnackbar('Invalid email/password combination'))
  }
}

function* watchSignupAsync () {
  yield takeLatest(SessionConstants.SIGNUP, signupAsync)
}

function* signupAsync (action) {
  try {
    let response = yield call(Api.Users.post(action.user))
    yield put(receiveCurrentUser(response.data.response))
  } catch (error) {
    yield put(openSnackbar('The specified email already exists'))
  }
}
