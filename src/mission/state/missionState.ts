import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'

interface MissionState {
  missions: Mission[],
  isLoading: boolean
  error?: string
}

const initialState: MissionState = {
  missions: [],
  isLoading: false,
  error: undefined
}

const missionSlice = createSlice(
  {
    name: 'mission-slice',
    initialState,
    reducers: {
      failure(state, action: PayloadAction<string>) {
        return { ...state, isLoading: false, error: action.payload }
      },
      success(state, action: PayloadAction<Mission[]>) {
        return { ...state, missions: action.payload, isLoading: false, error: undefined }
      },
      loading(state) {
        return { ...state, isLoading: true, error: undefined }
      },
      
    }
  }
)

export const fetchMissionsAction = createAction('fetchMissionsAction')

export const { loading, success, failure } = missionSlice.actions;
export default missionSlice.reducer

