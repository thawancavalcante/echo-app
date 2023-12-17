import { Link } from 'react-router-dom'
import { IGroup } from '../..'
import Style from './style.module.css'

interface ICardProps {
    group: IGroup
}
const numberFormat = new Intl.NumberFormat()
const Card = (props: ICardProps) => {
    return (
        <Link to="/" className={Style.container}>
            <div className={Style.title}>{props.group.name}</div>
            <div className={Style.description}>{props.group.description}</div>
            <div className={Style.info}>
                <div>{numberFormat.format(props.group.onlineUsers)} Online</div>
                <div className={Style.totalUsers}>{numberFormat.format(props.group.totalUsers)} {props.group.totalUsers > 1 ? 'Members' : 'Member'}</div>
            </div>
        </Link>
    )
}

export default Card