import { all } from 'redux-saga/effects'
import { missionSaga } from '../mission/saga/missionSaga'
import { refundSaga } from '../refund/saga/refundSaga'

function* rootSaga() {
  yield all([
    missionSaga(),
    refundSaga()
  ])
}

export { rootSaga }
