import ContactsList from '../modules/ContactsList'
import { Container, Flex, Box } from '@chakra-ui/react'
import Conversation from '../modules/Conversation'
import UserMenu from '../components/Header'
import AddContact from '../modules/AddContact'

const Main = () => {
    return(
            <Flex>
                <Box w="30%">
                    <UserMenu/>
                    <AddContact />
                    <ContactsList />
                </Box>
                
                <Conversation />
            </Flex>
    )
}

export default Main