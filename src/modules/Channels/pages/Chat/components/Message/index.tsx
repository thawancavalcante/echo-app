import Style from './style.module.css'

interface IMessage {
    username: string
    date: Date
    messages: string[]
}

interface IMessageProps {
    message: IMessage
}

const Message = (props: IMessageProps) => {
    const messages: React.JSX.Element[] = [];
    if (props.message.messages.length > 1) {
        for (let i = 1; i < props.message.messages.length; i++) {
            const message = props.message.messages[i]
            messages.push(<MessageContent key={i} message={message} time='11:30' />)
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.firstMessage}>
                <div className={Style.info}>
                    <div className={Style.username}>{props.message.username}</div>
                    {/* //TODO: when get data from api, format the date for don't need to format all times */}
                    <div className={Style.date}>{props.message.date.toLocaleString().replace(',', '')}</div>
                </div>
                <MessageContent message={props.message.messages[0]} time='11:30' />
            </div>

            {messages}
        </div>
    )
}

const MessageContent = (
    props: {
        message: string
        time: string
    }
) => (
    <div className={Style.message}>
        <div className={Style.content}>
            {props.message}
        </div>
        <div className={Style.contentTime}>{props.time}</div>
    </div>
)


export default Message