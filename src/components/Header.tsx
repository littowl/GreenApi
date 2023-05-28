import { HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Flex, IconButton, Text, VStack } from "@chakra-ui/react"
import { FC, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


interface HeaderProps {
    userNumber: string,
    func?: any,
    type:string
}

const Header:FC<HeaderProps> = ({userNumber, func, type}: HeaderProps) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const changeNumber = (number:string) => {
        return '+' + number.slice(0, number.length-5) 
    }

    return (
        <Flex alignItems="center" justifyContent="space-between" bgColor="#f0f2f5" w="full" p="2">
            <Flex alignItems="center">
                {type === 'conversation' && 
                    <Link to='/contacts'><Button display={['block', 'block', 'none']}>Назад</Button></Link>
                }
                <Avatar />
                <Text ml="2">{changeNumber(userNumber)}</Text>
            </Flex>
           <Box pos="relative">
                <IconButton aria-label="Menu" icon={<HamburgerIcon />} onClick={() => setOpen(!open)}/>
                {open && 
                    <VStack pos="absolute" left="50%" ml="-150px" spacing='0' border="1px" borderRadius="5" bg="white" w="170px" zIndex="2">
                        <Button onClick={func} variant='ghost' borderRadius="0" borderBottom="1px" colorScheme="gray" w="full">Выйти</Button>
                        <Button onClick={() => setOpen(false)} borderRadius="0" variant='ghost' colorScheme="gray" w="full">Закрыть</Button>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Header