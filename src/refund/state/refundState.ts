import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit'

interface RefundState {
    refunds: Refund[],
    isLoading: boolean,
    error?: string
}

const initialState: RefundState = {
    refunds: [],
    isLoading: false,
    error: undefined
}

const refundSlice = createSlice({
    name: 'refund-slice',
    initialState,
    reducers: {
        failure(state, action: PayloadAction<string>) {
            return { ...state, isLoading: false, error: action.payload }
        },
        success(state, action: PayloadAction<Refund[]>) {
            return { ...state, refunds: action.payload, isLoading: false, error: undefined }
        },
        loading(state) {
            return { ...state, isLoading: true, error: undefined }
        },
    }
})

export const fetchRefundsAction = createAction('fetchRefundsAction')

export const { loading, success, failure } = refundSlice.actions;
export default refundSlice.reducer
