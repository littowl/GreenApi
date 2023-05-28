import { Container, Flex, Box, Text, Avatar, IconButton, Button } from '@chakra-ui/react'
import Message from '../components/Message'
import ConversationInput from '../components/ConversationInput'
import { HamburgerIcon } from '@chakra-ui/icons'
import Header from '../components/Header'
import { useAppDispatch, useAppSelector } from '../hooks'
import axios from 'axios'
import { addMessage, closeChat, setContact } from '../store/slices/contactSlice'

const Conversation = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user) //мы
    const chatUsers = useAppSelector(state => state.contacts.contacts)  //все юзеры(из него строчкой ниже ищем нужного)
    let chatCurrentUser= chatUsers.find((user) => user.selected === true) //юзер с которым беседуем
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
            
            
        })
        .catch((error) => console.log(error))
        
    }

    const receiveMessage = async () => {
        try {
            let response
            while (response = await axios.get(urlReceive)) {
                let webhookBody = response.data.body;
                if (webhookBody.typeWebhook === 'incomingMessageReceived') {
                    console.log('incomingMessageReceived')
                    console.log(webhookBody.messageData.textMessageData.textMessage)
                    // Confirm WhatsApp message. Each received message must be confirmed to be able to consume next message
                    await deleteMessage(response.data.receiptId);
                } 
                // else if (webhookBody.typeWebhook === 'stateInstanceChanged') {
                //     console.log('stateInstanceChanged')
                //     console.log(`stateInstance=${webhookBody.stateInstance}`)
                // } else if (webhookBody.typeWebhook === 'outgoingMessageStatus') {
                //     console.log('outgoingMessageStatus')
                //     console.log(`status=${webhookBody.status}`)
                // } else if (webhookBody.typeWebhook === 'deviceInfo') {
                //     console.log('deviceInfo')
                //     console.log(`status=${webhookBody.deviceData}`)
                // }
            }
        } catch(ex) {
            console.error(ex)
        }
        console.log("End")
        
    }

    const deleteMessage = async (receiptId:string) => {
        axios.delete(`https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${receiptId}
        `)
    }

   
    return(
        <Box bgColor="#efebe3" w='full' h='100vh' pos="relative" borderLeft='1px' borderColor='#e9edef'>
            {chatCurrentUser ? 
                <Box>
                    <Header userNumber={chatCurrentUser.number} type="conversation"/>
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