import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Messages {
    text:string,
    type:string
}

interface contactState {
	number: string,
    selected: boolean,
    messages: Messages[]
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
                if (state.contacts.find((contact) => contact.number === action.payload.number) === undefined)      
                    state.contacts.push({
                        number: action.payload.number,
                        selected: false,
                        messages: []
                    })    
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.number !== action.payload.number)
        },
        selectContact(state, action) {
            state.contacts.map((contact) => contact.selected=false)
            const selectedContact = state.contacts.find((item) => item.number === action.payload.number)
            if (selectedContact) {
                selectedContact.selected = !selectedContact.selected
            } 
        },
        addMessage(state, action) {
            const currentContact = state.contacts.find((item) => item.number === action.payload.number)
            if (currentContact) {
                currentContact.messages.push({
                    text:action.payload.text,
                    type:action.payload.type
                })
            }
        },
        closeChat(state) {
            state.contacts.map((contact) => contact.selected=false)
            console.log(state.contacts)
        }
    }
})

export const {setContact, removeContact, selectContact, addMessage, closeChat} = contactSlice.actions //экспорт actions, которые будут вызывать редьюсеры

export default contactSlice.reducer //reducer, сформированный из reducers