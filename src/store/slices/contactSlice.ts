import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: [
        {number: '0'}
    ],
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: { //набор методов, из них формируется reducer
        setContact(state, action) {
            if (!state.contacts.includes(action.payload.number)) {
                state.contacts.push({
                number: action.payload.number
            })
            }
            
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.number !== action.payload.number)
        }
    }
})

export const {setContact, removeContact} = contactSlice.actions //экспорт actions, которые будут вызывать редьюсеры

export default contactSlice.reducer //reducer, сформированный из reducers