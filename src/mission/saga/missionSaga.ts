import { call, put, takeEvery } from "redux-saga/effects";
import { failure, fetchMissionsAction, loading, success } from "../state/missionState";
import { missionApi } from "../api/mission";

function* fetchMissions(){  
  try {
    yield put(loading())
    const missions = yield call(missionApi.getMissions)
    yield put(success(missions))
  } catch(e){
    yield put(failure("Something went wrong"))
  }
}

function* missionSaga(){
  yield takeEvery(fetchMissionsAction, fetchMissions)
}

export { missionSaga }