import { createSlice } from "@reduxjs/toolkit"
import { registerUserAPI, loginUserAPI } from "../action"

const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: {},
}

const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAPI.fulfilled, (state) => {
      state.isLoading = false
      console.log("register success")
    })

    builder.addCase(registerUserAPI.rejected, (state, action) => {
      state.isLoading = false
      console.log(action.payload)
    })

    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      state.isLoading = false
      console.log("login success")

      const { email, emailVerified, uid, refreshToken } = action.payload
      state.user = { uid, email, emailVerified, refreshToken }
      state.isLogin = true
    })

    builder.addCase(loginUserAPI.rejected, (state, action) => {
      state.isLoading = false
      console.log(action.payload)
    })
  },
})

export const { loading } = indexSlice.actions

export default indexSlice.reducer
