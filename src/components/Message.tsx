import { Container, Flex, Box } from '@chakra-ui/react'

type MessageProps = {
    text:string, 
    type:string
}

const Message = ( {text, type}: MessageProps ) => {
    return(
        <>
        {type == 'user' ? 
            <Box bgColor="#d9fdd3" maxW="300px" borderRadius="15px" h="auto" 
            p="3" mb="2" ml="60%">
                {text}
            </Box > 
        : 
            <Box bgColor="white" maxW="300px" borderRadius="15px" h="auto"  
            p="3" ml="5%" mb="2">
                {text}
            </Box>
        }
        </>
        
    )
}

export default Message