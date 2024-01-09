import { call, put, takeEvery } from "redux-saga/effects";
import { failure, fetchRefundsAction, loading, success } from "../state/refundState";
import { refundApi } from "../api/refund";

function* fetchRefunds(){  
  try {
    yield put(loading())
    const refunds = yield call(refundApi.getRefunds)
    yield put(success(refunds))
  } catch(e){
    yield put(failure("Something went wrong"))
  }
}

function* refundSaga(){
  yield takeEvery(fetchRefundsAction, fetchRefunds)
}

export { refundSaga }