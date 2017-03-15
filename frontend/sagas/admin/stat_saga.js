// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Actions
import {
  StatConstants,
  fetchStats,
  statsReceived
} from 'actions/admin/stat_actions'
import { openSnackbar } from 'actions/snackbar_actions'

// Api
import Api from 'api/root_api'

export default function* statSaga () {
  yield [
    watchFetchStats()
  ]
}

function* watchFetchStats () {
  yield takeEvery(StatConstants.FETCH_STATS, callFetchStats)
}

function* callFetchStats (action) {
  try {
    let response = yield call(Api.Admin.Stats.fetchStats(action.params))
    yield put(statsReceived(response.data.response))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}