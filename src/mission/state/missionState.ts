import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'

interface AddMissionState {
  inProgress: boolean //isAdding
  error?: string
}

interface MissionState {
  missions: Mission[],
  isLoading: boolean
  error?: string
  addMissionState: AddMissionState
}

const initialState: MissionState = {
  missions: [],
  isLoading: false,
  error: undefined,
  addMissionState: {
    inProgress: false, 
    error: undefined}
}

const missionSlice = createSlice(
  {
    name: 'mission-slice',
    initialState,
    reducers: {
      fetchFailure(state, action: PayloadAction<string>) {
        return { ...state, isLoading: false, error: action.payload }
      },
      fetchSuccess(state, action: PayloadAction<Mission[]>) {
        return { ...state, missions: action.payload, isLoading: false, error: undefined }
      },
      fetchLoading(state) {
        return { ...state, isLoading: true, error: undefined }
        
      },
      addInProgress(state){
        return {...state, inProgress: true}
      },
      addSuccess(state){
        return {...state, addMissionState: {...state.addMissionState, inProgress: false}}
      },
      addFailure(state, action: PayloadAction<string>){
        return { ...state, addMissionState: {...state.addMissionState, inProgress: false}, error: action.payload }
    }      
    }
  }
)

export const fetchMissionsAction = createAction('fetchMissionsAction')
export const addMissionAction = createAction('addMissionAction')

export const { addFailure, addSuccess, addInProgress, fetchLoading, fetchSuccess, fetchFailure } = missionSlice.actions;
export default missionSlice.reducer

