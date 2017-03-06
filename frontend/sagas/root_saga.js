// Sagas
import { watchLoginAsync, watchSignupAsync } from 'sagas/session/sessions_saga'
import {
  watchFetchSlates,
  watchFetchSlate,
  watchDeleteSlate,
  watchCreateSlate
} from 'sagas/admin/admin_saga'

export default function* rootSaga () {
  yield [
    watchLoginAsync(),
    watchSignupAsync(),
    watchFetchSlates(),
    watchFetchSlate(),
    watchDeleteSlate(),
    watchCreateSlate()
  ]
}