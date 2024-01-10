import { call, put, takeEvery } from "redux-saga/effects";
import { addMissionAction, fetchMissionsAction, addFailure, addSuccess, addInProgress, fetchLoading, fetchSuccess, fetchFailure } from "../state/missionState";
import { missionApi } from "../api/mission";

function* fetchMissions(){  
  try {
    yield put(fetchLoading())
    const missions = yield call(missionApi.getMissions)
    yield put(fetchSuccess(missions))
  } catch(e){
    yield put(fetchFailure("Something went wrong"))
  }
}

function* addMission(){
  try{
    yield put(addInProgress())
    const mission = yield call(missionApi.addMission)
    yield put(addSuccess(mission))

  } catch(e){
    yield put(addFailure("sth went wrong")) 
  }
}

function* missionSaga(){
  yield takeEvery(fetchMissionsAction, fetchMissions)
  yield takeEvery(addMissionAction, addMission)
}

export { missionSaga }