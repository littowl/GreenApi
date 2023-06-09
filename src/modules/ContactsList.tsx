import Contact from '../components/Contact'
import { VStack } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { removeContact, selectContact } from '../store/slices/contactSlice'

const ContactsList = () => {
    const dispatch = useAppDispatch()
    const numbers = useAppSelector(state => state.contacts.contacts)
    
    function deleteChat(number:string) {
        dispatch(removeContact({number}))
    }
    function selectChat(number:string) {
        dispatch(selectContact({number}))
    }

    return(
        <VStack overflow="auto" maxH="80vh">
            {numbers.map((item) => (
                
                <Contact    
                    message={item.messages.length === 0 ? "" : item.messages[item.messages.length - 1].text} 
                    name={item.number} key={item.number} 
                    deleteChat={deleteChat} selectChat={selectChat}
                />
            ))}
        </VStack>
        
        
    )
}

export default ContactsList