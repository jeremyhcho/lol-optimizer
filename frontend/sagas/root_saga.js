// Sagas
import { watchLoginAsync, watchSignupAsync } from 'sagas/session/sessions_saga'
import adminSaga from 'sagas/admin/admin_saga'

export default function* rootSaga () {
  yield [
    adminSaga(),
    watchLoginAsync(),
    watchSignupAsync()
  ]
}