
import { Box, Input, Flex, IconButton, Button } from '@chakra-ui/react'

const ConversationInput = () => {
    return (
        <Flex bgColor="#f0f2f5" justifyContent="center" alignItems="center" p="1">
            <Input bgColor="white" w="70%" my="2" placeholder='Введите сообщение...' />
            <Button>Отправить</Button>
        </Flex>
        
    )
}

export default ConversationInput