import { Box } from "@chakra-ui/react"
import UserMenu from "../modules/UserMenu"
import AddContact from "../modules/AddContact"
import ContactsList from "../modules/ContactsList"

const Contacts = () => {
    return(
        <Box>
            <UserMenu />
            <AddContact />
            <ContactsList />
        </Box>
    )
}

export default Contacts