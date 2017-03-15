import slateSaga from 'sagas/admin/slate_saga'
import statSaga from 'sagas/admin/stat_saga'

export default function* adminSaga () {
  yield [
    slateSaga(),
    statSaga()
  ]
}