import Message from './components/Message';
import Style from './style.module.css'
import { useParams } from 'react-router-dom';

const chat = [
    {
        username: 'Foo Bar',
        date: new Date(),
        messages: [
            "Hey!",
            "Have you ever dealt with algorithm complexity analysis? I'm a bit lost with Big O"
        ]
    },
    {
        username: 'Joe Doe',
        date: new Date(),
        messages: [
            "Hi! Yes, I've been through that. Big O can be tricky at first, but I'm here to help",
            "What specifically are you finding challenging?"
        ]
    },
    {
        username: 'Foo Bar',
        date: new Date(),
        messages: [
            "Well, I'm trying to understand the difference between O(1) and O(n). It seems a bit abstract to me"
        ]
    },
    {
        username: 'Joe Doe',
        date: new Date(),
        messages: [
            "I understand. Let's simplify. O(1) means the algorithm's runtime is constant, no matter the input size. While O(n) indicates that the runtime increases linearly with the input size"
        ]
    },
    {
        username: 'Foo Bar',
        date: new Date(),
        messages: [
            "Ah, got it. A practical example would help."
        ]
    },
    {
        username: 'Joe Doe',
        date: new Date(),
        messages: [
            "Sure!",
            "Let's say you're looking for an element in a list",
            "If you always check the first element, it's O(1) because the search time is constant",
            "If you need to check each element until you find what you're looking for, it's O(n) because the time increases with the number of elements"
        ]
    },
    {
        username: 'Foo Bar',
        date: new Date(),
        messages: [
            "that makes sense now. What about O(log n)?"
        ]
    },
    {
        username: 'Joe Doe',
        date: new Date(),
        messages: [
            "O(log n) is common in binary search algorithms. The idea is that at each step, you halve the number of elements you need to check. It's more efficient than checking each element individually"
        ]
    },
    {
        username: 'Foo Bar',
        date: new Date(),
        messages: [
            "I understand better now, thanks! "
        ]
    },
]

const Chat = () => {
    const { id } = useParams();

    return (
        <div className={Style.container}>
            <div className={Style.channelInfo}>
                Channel name {id}
            </div>
            <div className={Style.messagesContainer}>
                {chat.map((message, i) => <Message key={i} message={message} />)}
            </div>

            <div className={Style.messageInputContainer}>
                <input type='text' placeholder='Type a message' />
            </div>

        </div>
    )
}

Chat.route = '/channels/:id'

export default Chat