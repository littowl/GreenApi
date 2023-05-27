import { Container, Flex, Box, Text, Avatar, IconButton, Button } from '@chakra-ui/react'
import Message from '../components/Message'
import ConversationInput from '../components/ConversationInput'
import { HamburgerIcon } from '@chakra-ui/icons'
import Header from '../components/Header'
import { useAppSelector } from '../hooks'

const Conversation = () => {
    const chatUser = useAppSelector(state => state.contacts.contacts)
    const username = chatUser.find((user) => user.selected === true)
    
    return(
        <Box bgColor="#efebe3" w='full' h='100vh' pos="relative" borderLeft='1px' borderColor='#e9edef'>
            {username ? 
                <Box>
                <Header userNumber={username.number}/>
                <Flex flexDir="column" pt="100px" maxH="80vh" overflow="auto">
                    <Message type='user' text='hello'/>
                    <Message type='answer' text='lo!!'/>
                    <Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/><Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/>
                    <Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/><Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/><Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/><Message type='user' text='hello'/>
                    <Message type='answer' text='hellohello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!'/>
                </Flex>
                <Box pos="absolute" bottom="0" w="100%" >
                    <ConversationInput />
                </Box>
                
            </Box>
            :
            <Flex h="inherit" alignItems="center" justifyContent="center">
                <Text>Выберите контакт, чтобы начать общение.</Text>
            </Flex>
            }
            
        </Box>
    )
}

export default Conversation