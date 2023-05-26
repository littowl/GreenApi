import Contact from '../components/Contact'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { removeContact } from '../store/slices/contactSlice'

const ContactsList = () => {
    const dispatch = useAppDispatch()
    const numbers = useAppSelector(state => state.contacts.contacts)
    function deleteUser(number:string) {
        dispatch(removeContact({number}))
    }
    return(
        <VStack>
            {numbers && numbers.map((item) => (
                <Contact message='dsd' name={item.number} func={() => dispatch(removeContact(item.number))}/>
            ))}
        </VStack>
        
        
    )
}

export default ContactsList