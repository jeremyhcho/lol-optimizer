// Sagas
import adminSaga from 'sagas/admin/admin_saga'
import sessionSaga from 'sagas/session_saga'

export default function* rootSaga () {
  yield [
    adminSaga(),
    sessionSaga()
  ]
}