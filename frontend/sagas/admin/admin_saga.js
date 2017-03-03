// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Actions
import {
  SlateConstants,
  receiveSlates,
  receiveSlate,
  deleteSlate,
  receiveDeleteSlate
} from 'actions/admin/slate_actions'

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

export function* watchFetchSlate () {
  yield takeEvery(SlateConstants.FETCH_SLATE, fetchSlate)
}

export function* fetchSlate (action) {
  try {
    let response = yield call(Api.Admin.fetchSlate(action.slateId, action.params))
    yield put(receiveSlate(response.data.response))
  } catch (error) {
    console.log('Unable to fetch slate')
  }
}

export function* watchDeleteSlate () {
  yield takeLatest(SlateConstants.DELETE_SLATE, callDeleteSlate)
}

export function* callDeleteSlate (action) {
  try {
    let response = yield call(Api.Admin.deleteSlate(action.slateId))
    yield put(receiveDeleteSlate(action.slateId))
  } catch (error) {
    console.log('Unable to delete slate')
  }
}