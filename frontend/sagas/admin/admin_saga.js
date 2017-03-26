import slateSaga from 'sagas/admin/slate_saga'
import statSaga from 'sagas/admin/stat_saga'
import playerSaga from 'sagas/admin/player_saga'
import teamSaga from 'sagas/admin/team_saga'

export default function* adminSaga () {
  yield [
    slateSaga(),
    statSaga(),
    playerSaga(),
    teamSaga()
  ]
}