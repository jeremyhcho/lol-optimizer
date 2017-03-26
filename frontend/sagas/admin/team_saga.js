// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Api
import Api from 'api/root_api'

// Actions
import { TeamConstants, receiveTeam } from 'actions/admin/team_actions'
import { openSnackbar } from 'actions/snackbar_actions'

export default function* teamSaga () {
  yield [
    watchFetchTeam()
  ]
}

function* watchFetchTeam () {
  yield takeEvery(TeamConstants.FETCH_TEAM, callFetchTeam)
}

function* callFetchTeam (action) {
  try {
    let response = yield call(Api.Admin.Teams.fetchTeam(action.teamId, action.params))
    yield put(receiveTeam(response.data.response))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}