import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface contactState {
	number: string,
    selected: boolean
}

interface ContactsState {
    contacts:contactState[]
}

const initialState: ContactsState = {
    contacts: []
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: { //набор методов, из них формируется reducer
        setContact(state, action) {      
                state.contacts.push({
                    number: action.payload.number,
                    selected: false
                })    
            
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.number !== action.payload.number)
        },
        selectContact(state, action) {
            const selectedContact = state.contacts.find((item) => item.number === action.payload.number)
            if (selectedContact) {
                selectedContact.selected = !selectedContact.selected
            } 
            
            
        }
    }
})

export const {setContact, removeContact, selectContact} = contactSlice.actions //экспорт actions, которые будут вызывать редьюсеры

export default contactSlice.reducer //reducer, сформированный из reducers