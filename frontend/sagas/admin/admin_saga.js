// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Actions
import { SlateConstants, receiveSlates } from 'actions/admin/slate_actions'

// Api
import Api from 'api/root_api'

export function* watchUploadSlateCsvAsync () {
  yield takeLatest(SlateConstants.UPLOAD_SLATE_CSV, uploadSlateCsv)
}

export function* uploadSlateCsv (action) {
  try {
    let response = yield call(Api.Admin.uploadSlateCsv(action.file))
  } catch (error) {
    console.log('Error occured while uploading slate CSV.')
  }
}

export function* watchFetchSlates () {
  yield takeEvery(SlateConstants.FETCH_SLATES, fetchSlates)
}

export function* fetchSlates (action) {
  try {
    let response = yield call(Api.Admin.fetchSlates(action.dateParams))
    yield put(receiveSlates(response.data.response))
  } catch (error) {
    console.log('Unable to fetch slates')
  }
}