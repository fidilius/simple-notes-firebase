import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import indexReducer from "../reducer"

export const store = configureStore({
  reducer: {
    index: indexReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
