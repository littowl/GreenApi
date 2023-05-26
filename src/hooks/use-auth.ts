import { useAppSelector } from "../hooks";

export function useAuth() {
    const {wid} = useAppSelector(state => state.user)

    return {
        isAuth: !!wid,
        wid
    }
}