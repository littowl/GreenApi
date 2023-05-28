import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons"
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
                    <Link to='/contacts'><IconButton aria-label="to contacts" display={['block', 'block', 'none']} icon={<ArrowBackIcon />} /></Link>
                }
                <Avatar ml={["2", "2", 0]} />
                <Text ml="2">{changeNumber(userNumber)}</Text>
            </Flex>
            {type !== 'conversation' &&
                <Box pos="relative">
                        <Button onClick={func} variant='ghost' colorScheme="gray" w="full">Выйти</Button>    
                </Box>
            }

        </Flex>
    )
}

export default Header