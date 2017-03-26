// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Api
import Api from 'api/root_api'

// Actions
import { PlayerConstants, receivePlayer } from 'actions/admin/player_actions'
import { openSnackbar } from 'actions/snackbar_actions'

export default function* playerSaga () {
  yield [
    watchFetchPlayer()
  ]
}

function* watchFetchPlayer () {
  yield takeEvery(PlayerConstants.FETCH_PLAYER, callFetchPlayer)
}

function* callFetchPlayer (action) {
  try {
    let response = yield call(Api.Admin.Players.fetchPlayer(action.playerId, action.params))
    yield put(receivePlayer(response.data.response))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}