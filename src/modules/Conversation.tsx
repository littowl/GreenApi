import { Container, Flex, Box, Text, Avatar, IconButton, Button } from '@chakra-ui/react'
import Message from '../components/Message'
import ConversationInput from '../components/ConversationInput'
import { HamburgerIcon } from '@chakra-ui/icons'
import Header from '../components/Header'
import { useAppDispatch, useAppSelector } from '../hooks'
import axios from 'axios'
import { addMessage, closeChat, setContact } from '../store/slices/contactSlice'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Conversation = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user) //мы
    const chatUsers = useAppSelector(state => state.contacts.contacts)  //все юзеры(из него строчкой ниже ищем нужного)
    const chatCurrentUser = chatUsers.find((user) => user.selected === true) //юзер с которым беседуем
    const urlSend = `https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`
    const urlReceive = `https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
    
    //отправка сообщения
    const sendMessage = async (message:string) => {
        await axios.post(urlSend, {
            "chatId": `${chatCurrentUser?.number}`,
            "message": `${message}`
        })
        .then((response) => {
            dispatch(addMessage({
                number: chatCurrentUser?.number,
                text: message,
                type:'sentMessage'
            }))
            receiveMessage()
            
        })
        .catch((error) => console.log(error))
        
    }

    const receiveMessage = async () => {
        await axios.get(urlReceive).then((res) => {
            console.log(res)
            if (res.data !== null) {
                dispatch(addMessage({
                    number: chatCurrentUser?.number,
                    text: res.data.body.messageData.textMessageData.textMessage,
                    type:'receivedMessage'
                }))
                deleteMessage(res.data.receiptId)
            }
        })
    }

    const deleteMessage = async (receiptId:string) => {
        await axios.delete(`https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}
        `)
        receiveMessage()
        
        
    }
   
    return(
        <Box bgColor="#efebe3" w='full' h='100vh' pos="relative" borderLeft='1px' borderColor='#e9edef'>
            {chatCurrentUser ? 
                <Box>
                    <Header userNumber={chatCurrentUser.number} type="conversation"/>
                    <Flex flexDir="column" pt="100px" maxH="80vh" overflow="auto">
                        {chatCurrentUser.messages.map((message, id) => 
                            <Message key={id} text={message.text} type={message.type}/>)}
                    </Flex>
                    <Box pos="absolute" bottom="0" w="100%" >
                        <ConversationInput sendMessage={sendMessage}/>
                    </Box>
                </Box>
            :
            <Flex h="inherit" alignItems="center" justifyContent="center" flexDir="column" p="2">
                <Text textAlign="center">Добавьте или выберите контакт, чтобы начать общение.</Text>
                <Link to='/contacts'><Button display={['block', 'block','none']} bgColor="#4cae4f">Добавить контакт</Button></Link>
            </Flex>
            }
            
        </Box>
    )
}

export default Conversation