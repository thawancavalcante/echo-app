import { Link } from 'react-router-dom'
import { IChannel } from '../..'
import Style from './style.module.css'
import Chat from '../../../../../Chat'

interface ICardProps {
    channel: IChannel
}
const numberFormat = new Intl.NumberFormat()
const Card = (props: ICardProps) => {
    return (
        <Link to={Chat.route.replace(':id', props.channel.id)} className={Style.container}>
            <div className={Style.title}>{props.channel.name}</div>
            <div className={Style.description}>{props.channel.description}</div>
            <div className={Style.info}>
                <div>{numberFormat.format(props.channel.onlineUsers)} Online</div>
                <div className={Style.totalUsers}>{numberFormat.format(props.channel.totalUsers)} {props.channel.totalUsers > 1 ? 'Members' : 'Member'}</div>
            </div>
        </Link>
    )
}

export default Card