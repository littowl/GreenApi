import { Box, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { setContact } from "../store/slices/contactSlice"
import { useState } from "react"
import { useAppDispatch } from "../hooks"

const AddContact = () => {
    const [number, setNumber] = useState("")
    const dispatch = useAppDispatch()

    const add = () => {
        dispatch(setContact({
            number: number
        }))
    }

    return (
        <InputGroup>
            <Input 
                m={2} pl={2} bg="white"  placeholder="Введите номер собеседника..."
                onChange={(e) => setNumber(e.target.value)}    
            />

            <InputRightElement m={2}>
                <IconButton 
                    variant='ghoast' colorScheme='teal' aria-label='Add Contact' icon={<AddIcon />}
                    onClick={add}
                />
            </InputRightElement> 
        </InputGroup>
    )
}

export default AddContact