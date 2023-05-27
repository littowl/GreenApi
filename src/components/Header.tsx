import { HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Flex, IconButton, Text, VStack } from "@chakra-ui/react"
import { FC, useState } from "react"


interface HeaderProps {
    userNumber: string,
    func?: any
}

const Header:FC<HeaderProps> = ({userNumber, func}: HeaderProps) => {
    const [open, setOpen] = useState(false)
    const changeNumber = (number:string) => {
        return '+' + number.slice(0, number.length-5) 
    }

    return (
        <Flex alignItems="center" justifyContent="space-between" bgColor="#f0f2f5" w="full" p="2">
            <Flex alignItems="center">
                <Avatar />
                <Text ml="2">{changeNumber(userNumber)}</Text>
            </Flex>
           <Box pos="relative">
                <IconButton aria-label="Menu" icon={<HamburgerIcon />} onClick={() => setOpen(!open)}/>
                {open && 
                    <VStack pos="absolute" right="2" bg="white" w="200px" zIndex="2">
                        <Button onClick={func} variant='ghost' colorScheme="gray" w="full">Выйти</Button>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Header