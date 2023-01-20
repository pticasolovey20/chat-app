import { useSelector } from "react-redux";

export const useAuth = () => {
    const {email, password} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        password,
    }
}