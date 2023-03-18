import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { set, ref, onValue, child, push, update } from "firebase/database"
import { auth, database } from "../../firebase"
import { loading } from "../reducer"

export const registerUserAPI = createAsyncThunk(
  "async/register",
  async ({ email, password }, thunkAPI) => {
    try {
      thunkAPI.dispatch(loading())

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      return userCredential.user
    } catch (error) {
      // console.log(error)
      return thunkAPI.rejectWithValue("something went wrong")
    }
  }
)

export const loginUserAPI = createAsyncThunk(
  "async/login",
  async ({ email, password }, thunkAPI) => {
    try {
      thunkAPI.dispatch(loading())

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      return userCredential.user
    } catch (error) {
      // console.log(error)
      return thunkAPI.rejectWithValue("login failed")
    }
  }
)

export const addDataToAPI = (data) => {
  const { title, content, date, userId } = data

  const newNotes = {
    date,
    title,
    content,
  }

  const newNotesKey = push(child(ref(database), "notes")).key

  const updates = {}
  updates["notes/" + newNotesKey] = newNotes

  return update(ref(database), updates)

  // push(ref(database, "notes/" + userId), {
  //   date,
  //   title,
  //   content,
  // })
}

export const readDataAPI = () => {
  const notes = ref(database, "notes")
  onValue(notes, (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
}
