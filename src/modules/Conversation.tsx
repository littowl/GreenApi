import { Container, Flex, Box, Text, Avatar, IconButton, Button } from '@chakra-ui/react'
import Message from '../components/Message'
import ConversationInput from '../components/ConversationInput'
import { HamburgerIcon } from '@chakra-ui/icons'
import Header from '../components/Header'
import { useAppDispatch, useAppSelector } from '../hooks'
import axios from 'axios'
import { addMessage, setContact } from '../store/slices/contactSlice'

const Conversation = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user) //мы
    const chatUsers = useAppSelector(state => state.contacts.contacts)  //все юзеры(из него строчкой ниже ищем нужного)
    const chatCurrentUser= chatUsers.find((user) => user.selected === true) //юзер с которым беседуем
    const url = `https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`
    

    //отправка сообщения
    const sendMessage = async (message:string) => {
        await axios.post(url, {
            "chatId": `${chatCurrentUser?.number}`,
            "message": `${message}`
        })
        .then((response) => {
            dispatch(addMessage({
                number: chatCurrentUser?.number,
                text: message,
                type:'sentMessage'
            }))
        })
        .catch((error) => console.log(error))
    }

    return(
        <Box bgColor="#efebe3" w='full' h='100vh' pos="relative" borderLeft='1px' borderColor='#e9edef'>
            {chatCurrentUser ? 
                <Box>
                    <Header userNumber={chatCurrentUser.number}/>
                    <Flex flexDir="column" pt="100px" maxH="80vh" overflow="auto">
                        {chatCurrentUser.messages.map((message) => 
                            <Message text={message.text} type={message.type}/>)}
                    </Flex>
                    <Box pos="absolute" bottom="0" w="100%" >
                        <ConversationInput sendMessage={sendMessage}/>
                    </Box>
                </Box>
            :
            <Flex h="inherit" alignItems="center" justifyContent="center">
                <Text>Добавьте или выберите контакт, чтобы начать общение.</Text>
            </Flex>
            }
            
        </Box>
    )
}

export default Conversation