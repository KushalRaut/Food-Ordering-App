import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isauthticated: false,
  },
  reducers: {
    addAuth: (state) => {
      state.isauthticated = true
    },
    resetAuth: (state) => {
      state.isauthticated = false
    },
  },
})

export const { addAuth, resetAuth } = authSlice.actions
export default authSlice.reducer
