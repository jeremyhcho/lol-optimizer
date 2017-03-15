// Saga
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

// Actions
import {
  SlateConstants,
  receiveSlates,
  setSlate,
  deleteSlate,
  receiveDeleteSlate,
  slatesFetching
} from 'actions/admin/slate_actions'
import { openSnackbar } from 'actions/snackbar_actions'

// Api
import Api from 'api/root_api'

export default function* slateSaga () {
  yield [
    watchFetchSlates(),
    watchFetchSlate(),
    watchDeleteSlate(),
    watchCreateSlate()
  ]
}

function* watchFetchSlates () {
  yield takeEvery(SlateConstants.FETCH_SLATES, fetchSlates)
}

function* fetchSlates (action) {
  try {
    yield put(slatesFetching())
    let response = yield call(Api.Admin.Slates.fetchSlates(action.dateParams))
    yield put(receiveSlates(response.data.response))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}

function* watchFetchSlate () {
  yield takeEvery(SlateConstants.FETCH_SLATE, fetchSlate)
}

function* fetchSlate (action) {
  try {
    let response = yield call(Api.Admin.Slates.fetchSlate(action.slateId, action.params))
    yield put(setSlate(response.data.response))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}

function* watchDeleteSlate () {
  yield takeLatest(SlateConstants.DELETE_SLATE, callDeleteSlate)
}

function* callDeleteSlate (action) {
  try {
    let response = yield call(Api.Admin.Slates.deleteSlate(action.slateId))
    yield put(openSnackbar('The slate was successfully deleted'))
    yield put(receiveDeleteSlate(action.slateId))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}

function* watchCreateSlate () {
  yield takeLatest(SlateConstants.CREATE_SLATE, callCreateSlate)
}

function* callCreateSlate (action) {
  try {
    let response = yield call(Api.Admin.Slates.createSlate(action.params))
  } catch (error) {
    yield put(openSnackbar(
      'Uh oh! Something went wrong.',
      { more: error.message }
    ))
  }
}