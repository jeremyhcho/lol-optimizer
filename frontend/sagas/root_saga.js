// Sagas
import { watchLoginAsync, watchSignupAsync } from 'sagas/session/sessions_saga'
import { watchUploadSlateCsvAsync } from 'sagas/admin/admin_saga'

export default function* rootSaga () {
  yield [
    watchLoginAsync(),
    watchSignupAsync(),
    watchUploadSlateCsvAsync()
  ]
}