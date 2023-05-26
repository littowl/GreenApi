import { Avatar, Box, Button, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type ContactProps = {
    name?: string,
    message?: string,
    func: any
}

const Contact = ( { name, message, func }: ContactProps ) => {
    const [open, setOpen] = useState(false)
    
    return (
        <Flex borderBottom='1px' borderColor='#e9edef' p='2' alignItems="center" gap='2' w="full">
            <Box>
                <Avatar src = ''/>
                
            </Box>
            <Box>
                <Text>{name}</Text>
                <Text>{message}</Text>
            </Box>
            <Box w="full" textAlign="right" pos="relative">
                <Text>Вторник</Text>
                <IconButton size="xs" onClick={() => setOpen(!open)} icon={<ChevronDownIcon />} aria-label='contact-menu' /> 
                 {open && 
                    <VStack border="1px" borderRadius="5" pos="absolute"  bg="white" w="200px" zIndex="2">
                        <Button onClick={func} variant='ghost' colorScheme="gray" w="full">Удалить</Button>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Contact