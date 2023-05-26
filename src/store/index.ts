import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import contactReducer from './slices/contactSlice'

export const store = configureStore({
    reducer: { //тут хранятся все редьюсеры
        user: userReducer,
        contacts: contactReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>