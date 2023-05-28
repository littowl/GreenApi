import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { setUser } from "../store/slices/userSlice"
import { useAppDispatch } from "../hooks"

const AuthorizationForm = () => {
    const [idInstance, setIdInstance] = useState('')
    const [apiTokenInstance, setApiTokenInstance] = useState('')
    const [error, setError] = useState(false)
    const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const Auth = async () => {
        if (idInstance == '' || apiTokenInstance == '') return 0
        await axios.get(url)
        .then((res) => {
            dispatch(setUser({
                idInstance: idInstance,
                apiTokenInstance: apiTokenInstance,
                wid: res.data.wid
            }))
            
            navigate('/main')
        })
        .catch(() => {
            setError(true)
        })
        console.log(idInstance)
    }
    return (
        <Flex flexDir="column" h="100vh" justifyContent="center" alignItems="center">
            Введите свои учётные данные:
            <Box my="5">
                <Input 
                    mb="2" placeholder="Введите idInstanse..." type="id" value={idInstance}
                    onChange={(e) => setIdInstance(e.target.value)} onKeyDown={e => e.key === 'Enter' && Auth()}
                />
                <Input
                    placeholder="Введите apiTokenInstance..." type="token" value={apiTokenInstance}
                    onChange={(e) => setApiTokenInstance(e.target.value)} onKeyDown={e => e.key === 'Enter' && Auth()}
                />
            </Box>

            <Button onClick={Auth} bgColor="#4cae4f">Авторизоваться</Button>
            {error && 
                <Box color="red" >Данные от аккаунта неверны.</Box>
            }
        </Flex>
    )
}

export default AuthorizationForm