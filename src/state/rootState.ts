import { configureStore } from "@reduxjs/toolkit"
import missionReducer from "../mission/state/missionState"
import refundReducer from "../refund/state/refundState"
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    mission: missionReducer,
    refund: refundReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
