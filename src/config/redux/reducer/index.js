import { createSlice } from "@reduxjs/toolkit"
import { asyncRegister, asyncLogin } from "../action"
import { redirect } from "react-router-dom"

const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: {},
}

const indexSlice = createSlice({
  name: "index",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(asyncRegister.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(asyncRegister.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(asyncRegister.rejected, (state) => {
      state.isLoading = false
    })

    builder.addCase(asyncLogin.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      console.log("login success")
      const { email, emailVerified, uid } = action.payload.user

      state.isLoading = false
      state.user = { uid, email, emailVerified }
    })
    builder.addCase(asyncLogin.rejected, (state, action) => {
      console.log(action.payload)
      state.isLoading = false
    })
  },
})

export default indexSlice.reducer
