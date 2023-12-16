import { useNavigate } from "react-router-dom"
import useAuth from "../../../Auth/context/useAuth"
import LoginPage from "../../../Auth/pages/Login"


const HomePage = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    function handleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()

        auth.logout().then(() => {
            navigate(LoginPage.route)
        })
    }

    return (
        <div>
            <h1>HomePage</h1>
            <button type="button" onClick={handleLogout}>Logout</button>

        </div>
    )
}

HomePage.route = '/'

export default HomePage