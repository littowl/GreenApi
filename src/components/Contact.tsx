import { Avatar, Box, Button, Card, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type ContactProps = {
    name: string,
    message: string,
    deleteChat: any,
    selectChat: any
}

const Contact = ( { name, message, deleteChat, selectChat }: ContactProps ) => {
    const [open, setOpen] = useState(false)
    const changeNumber = (number:string) => {
        return '+' + number.slice(0, number.length-5) 
    }

    

    return (
        <Box onClick={selectChat.bind(this, name)}  cursor="pointer"  w="full" p={[2, 1]} borderBottom="1px" borderColor="gray">
            <Flex display={['flex', 'flex', 'none']} alignItems="center" flexDir="row">
                
                    <Box w="85%">
                    <Link to='/main'>
                            <Flex >  
                                <Avatar src = ''/>
                                <Box ml="2">
                                    <Text>{changeNumber(name)}</Text>
                                    <Text>{message}</Text>
                                </Box>
                            </Flex>             
                            </Link>
                    </Box>
                
                <Box pos="absolute" right="2">
                    <IconButton size={['sm', 'sm', 'xs']} pos="relative" onClick={deleteChat.bind(this, name)} icon={<DeleteIcon />} aria-label='contact-menu' /> 
                        
                </Box>
                
                    
                    
                        
                        
                    
            </Flex>
            
            <Flex display={['none', 'none', 'flex']} p='2' alignItems="center" gap="2" w="full">
                <Box>
                    <Avatar src = ''/>
                </Box>
                <Box>
                    <Text>{changeNumber(name)}</Text>
                    <Text>{message}</Text>
                </Box>
                <Box w="full" textAlign="right" >
                      
                <IconButton size={['sm', 'sm', 'xs']} pos="relative" onClick={deleteChat.bind(this, name)} icon={<DeleteIcon />} aria-label='contact-menu' /> 
                </Box>
            </Flex>
            
        </Box>
    )
}

export default Contact