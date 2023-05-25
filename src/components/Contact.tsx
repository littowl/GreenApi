import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type ContactProps = {
    message: string,
}

const Contact = ( { message }: ContactProps ) => {
    return (
        <Flex borderBottom='1px' borderColor='#e9edef' p='2' alignItems="center" gap='2' w="full">
            <Box>
                <Avatar src = ''/>
            </Box>
            <Box>
                <Text>{message}</Text>
            </Box>
            <Box w="full" textAlign="right">
                <Text>Вторник</Text>
            </Box>
        </Flex>
    )
}

export default Contact