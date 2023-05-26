import ContactsList from '../modules/ContactsList'
import { Container, Flex, Box, Text, Button } from '@chakra-ui/react'
import Conversation from '../modules/Conversation'
import UserMenu from '../modules/UserMenu'
import AddContact from '../modules/AddContact'
import { useAppSelector } from '../hooks'
import { Link, useNavigate } from 'react-router-dom'


const Main = () => {
    const navigate = useNavigate()
    const {wid} = useAppSelector(state => state.user)
    
    return(
            <Flex>
                {wid ? 
                <>
                    <Box w="30%">
                        <UserMenu />
                        <AddContact />
                        <ContactsList />
                    </Box> 
            
                    <Conversation />
                    {console.log(wid)}
                </>
                
                : 
                <Flex justifyContent="center" alignItems="center" flexDir="column" w="full" h="100vh" gap={5}>
                    <Text>Для доступа к этой странице небходимо пройти авторизацию.</Text>
                    <Link to='/'><Button>Авторизоваться</Button></Link>
                </Flex>
                }
                
            </Flex>
    )
}

export default Main