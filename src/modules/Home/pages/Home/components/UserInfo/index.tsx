import useAuth from '../../../../../Auth/context/useAuth'
import Style from './style.module.css'

const UserInfo = () => {
    const auth = useAuth()

    return (
        <div className={Style.container}>
            <div className={Style.name}>{auth.user?.username}</div>
            <button className={Style.settings}><span className="material-icons-outlined">settings</span></button>
        </div>
    )
}

export default UserInfo