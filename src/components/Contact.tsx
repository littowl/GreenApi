import { Avatar, Box, Button, Card, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type ContactProps = {
    name?: string,
    message?: string,
    deleteChat: any,
    selectChat: any
}

const Contact = ( { name, message, deleteChat, selectChat }: ContactProps ) => {
    const [open, setOpen] = useState(false)
    
    return (
        <Flex onClick={selectChat.bind(this, name)}  cursor="pointer" flexDir="row"  p='2' alignItems="center" gap='2' w="full" >
            <Box>
                <Avatar src = ''/>
            </Box>
            <Box>
                <Text>{name}</Text>
                <Text>{message}</Text>
            </Box>
            <Box w="full" textAlign="right" >
                <Text>Вторник</Text>
                <IconButton size="xs" pos="relative" onClick={() => setOpen(!open)} icon={<ChevronDownIcon />} aria-label='contact-menu' /> 
                 {open && 
                    <VStack border="1px" borderRadius="5" pos="absolute" bg="white" w="170px" zIndex="2">
                        <Button onClick={deleteChat.bind(this, name)} variant='ghost' colorScheme="gray" w="full">Удалить</Button>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Contact