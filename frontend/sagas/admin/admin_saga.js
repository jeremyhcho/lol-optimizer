
// Actions
import { AdminConstants } from 'actions/session/session_actions'

// Api
import Api from 'api/root_api'

export function* watchUploadSlateCsvAsync () {
  yield takeLatest(AdminConstants.UPLOAD_SLATE_CSV, uploadSlateCsv)
}

export function* uploadSlateCsv (action) {
  try {
    let response = yield call(Api.Admin.uploadSlateCsv(action.file))
  } catch (error) {
    console.log('Error occured while uploading slate CSV.')
  }
}