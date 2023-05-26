import { createSlice } from "@reduxjs/toolkit"

// параметры пользователя
const initialState = {
    idInstance: null,
    apiTokenInstance: null,
    wid: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // устанавливаем юзера
        setUser(state, action) { 
            state.idInstance = action.payload.idInstanse
            state.apiTokenInstance = action.payload.apiTokenInstance
            state.wid = action.payload.wid
        },
        // убираем юзера
        removeUser(state) {
            state.idInstance = null
            state.apiTokenInstance = null
            state.wid = ""
        }
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer