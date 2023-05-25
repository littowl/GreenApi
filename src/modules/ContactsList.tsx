import Contact from '../components/Contact'
import { Stack, HStack, VStack } from '@chakra-ui/react'

const ContactsList = () => {
    return(
        <VStack >
            <Contact message="hello" />
            <Contact message="hello" />
        </VStack>
        
        
    )
}

export default ContactsList