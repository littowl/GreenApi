import Header from "../components/Header"
import userSlice, { removeUser } from "../store/slices/userSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"

const UserMenu = () => {
    const userNumber = useAppSelector(state => state.user.wid)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    function Logout() {
        dispatch(removeUser)
        navigate('/')
    }
    return(
        <Header userNumber={userNumber} func={Logout} type="user"/>
        
    )
}

export default UserMenu