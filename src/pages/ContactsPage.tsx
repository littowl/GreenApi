import { Box } from "@chakra-ui/react"
import UserMenu from "../modules/UserMenu"
import AddContact from "../modules/AddContact"
import ContactsList from "../modules/ContactsList"

const ContactsPage = () => {
    
    return(
        <Box>
            <UserMenu />
            <AddContact />
            <ContactsList />
        </Box>
    )
}

export default ContactsPage