import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addMissionAction, fetchMissionsAction, addFailure, addSuccess, addInProgress, fetchInProgress, fetchSuccess, fetchFailure } from "../state/missionState";
import { missionApi } from "../api/mission";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchMissions(){  
  try {
    yield call(console.log, "Fetching")
    yield put(fetchInProgress())
    const missions = yield call(missionApi.getMissions)
    yield put(fetchSuccess(missions))
  } catch(e){
    yield put(fetchFailure("Something went wrong while fetching missions"))
  }
}

function* addMission(action: PayloadAction<Mission>){
  try{
    yield put(addInProgress())
    yield call(missionApi.addMission, action.payload)
    yield put(addSuccess())
    yield put(fetchMissionsAction())
  } catch(e){
    yield put(addFailure("Something went wrong while adding a new mission")) 
  }
}

function* missionSaga(){
  yield takeLatest(fetchMissionsAction, fetchMissions)
  yield takeEvery(addMissionAction, addMission)
}

export { missionSaga }