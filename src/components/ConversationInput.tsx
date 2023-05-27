
import { Box, Input, Flex, IconButton, Button } from '@chakra-ui/react'
import { useState } from 'react'

interface ConverastionInputProps {
    sendMessage: any
}

const ConversationInput = ({sendMessage}: ConverastionInputProps) => {
    const [message, setMessage] = useState("")
    return (
        <Flex bgColor="#f0f2f5" justifyContent="center" alignItems="center" p="1">
            <Input 
                bgColor="white" w="70%" my="2" placeholder='Введите сообщение...' 
                onChange={((e) => setMessage(e.target.value))}
            />
            <Button onClick={sendMessage.bind(this, message)}>Отправить</Button>
        </Flex>
        
    )
}

export default ConversationInput