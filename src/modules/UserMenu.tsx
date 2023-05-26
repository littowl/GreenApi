import Header from "../components/Header"
import userSlice, { removeUser } from "../store/slices/userSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router-dom"

const UserMenu = () => {
    const userNumber = useAppSelector(state => state.user.wid)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const changeNumber = (number:string) => {
        return '+' + number.slice(0, number.length-5) 
    }
    function Logout() {
        dispatch(removeUser)
        navigate('/')
    }
    return(
        <Header userNumber={changeNumber(userNumber)} func={Logout} />
        
    )
}

export default UserMenu