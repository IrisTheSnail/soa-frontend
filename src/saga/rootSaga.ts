import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { missionSaga } from '../mission/saga/missionSaga'

function* rootSaga() {
  yield all([
    missionSaga()
  ])
}

export { rootSaga }
