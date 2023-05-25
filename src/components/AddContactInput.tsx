import { AddIcon } from "@chakra-ui/icons"
import { Box, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const AddContactInput = () => {
    return (
        <InputGroup>
            <Input placeholder="Введите номер собеседника..."/>
            <InputRightElement>
                <IconButton variant='outline' colorScheme='teal' aria-label='Add Contact' icon={<AddIcon />}/>
            </InputRightElement> 
        </InputGroup>
    )
}

export default AddContactInput