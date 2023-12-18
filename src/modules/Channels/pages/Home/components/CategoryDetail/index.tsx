import Card from './components/Card'
import Style from './style.module.css'

interface ICategoriesProps {
    category: ICategory
}

export interface ICategory {
    title: string
    channels: IChannel[]
}


export interface IChannel {
    id: string
    name: string
    onlineUsers: number
    totalUsers: number
    description: string
}

const CategoryDetail = (props: ICategoriesProps) => {
    return (
        <div className={Style.container}>
            <div className={Style.title}>{props.category.title}</div>

            <div className={Style.channelsContainer}>
                {props.category.channels.map(item => <Card key={item.id} channel={item} />)}
            </div>
        </div>
    )
}

export default CategoryDetail