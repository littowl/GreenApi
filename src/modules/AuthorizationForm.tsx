import { Box, Button, Flex } from "@chakra-ui/react"
import AuthorizationInput from "../components/AuthorizationInput"

const AuthorizationForm = () => {
    return (
        <Flex flexDir="column" h="100vh" justifyContent="center" alignItems="center">
            Введите свои учётные данные:
            <AuthorizationInput />
            <Button>Авторизоваться</Button>
        </Flex>
    )
}

export default AuthorizationForm