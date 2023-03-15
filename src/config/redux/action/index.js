import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../../firebase"

export const asyncRegister = createAsyncThunk(
  "async/register",
  async ({ email, password, setEmail, setPassword }, thunkAPI) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log("success: ", user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })

      return new Promise((resolve) => {
        setTimeout(() => {
          setEmail("")
          setPassword("")
          resolve()
        }, 3000)
      })
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue("something went wrong")
    }
  }
)

export const asyncLogin = createAsyncThunk(
  "async/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      return { status: true, user: userCredential.user }
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue("login failed")
    }
  }
)
