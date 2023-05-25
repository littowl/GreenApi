import { HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between" bgColor="#f0f2f5" w="full" p="2">
            <Flex alignItems="center">
                <Avatar />
                <Text ml="2">Мама</Text>
            </Flex>
           <Box>
                <IconButton aria-label="Menu" icon={<HamburgerIcon />}/>
            </Box>
        </Flex>
    )
}

export default Header