import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'

interface FetchState {
  missions: Mission[]
  inProgress: boolean
  error?: string
}

interface AddState {
  inProgress: boolean
  error?: string
}

interface MissionState {
  fetchState: FetchState
  addState: AddState
}

const initialState: MissionState = {
  fetchState: {
    missions: [],
    inProgress: false,
    error: undefined,
  },
  addState: {
    inProgress: false, 
    error: undefined
  }
}

const missionSlice = createSlice(
  {
    name: 'mission-slice',
    initialState,
    reducers: {
      fetchFailure(state, action: PayloadAction<string>) {
        return { ...state, fetchState: {...state.fetchState, inProgress: false, error: action.payload } }
      },
      fetchSuccess(state, action: PayloadAction<Mission[]>) {
        return { ...state, fetchState: {...state.fetchState, missions: action.payload, inProgress: false, error: undefined } }
      },
      fetchInProgress(state) {
        return { ...state, fetchState: {...state.fetchState, missions: [], inProgress: true, error: undefined } }
        
      },

      addFailure(state, action: PayloadAction<string>) {
        return { ...state, addState: {...state.addState, inProgress: false, error: action.payload } }
      },
      addSuccess(state) {
        return { ...state, addState: {...state.addState, inProgress: false, error: undefined } }
      },
      addInProgress(state) {
        return { ...state, addState: {...state.addState, inProgress: true, error: undefined } }
        
      },
           
    }
  }
)

export const fetchMissionsAction = createAction('fetchMissionsAction')
export const addMissionAction = createAction<Mission>('addMissionAction')

export const { addFailure, addSuccess, addInProgress, fetchInProgress, fetchSuccess, fetchFailure } = missionSlice.actions;
export default missionSlice.reducer

