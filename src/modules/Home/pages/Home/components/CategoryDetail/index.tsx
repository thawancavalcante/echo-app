import Card from './components/Card'
import Style from './style.module.css'

interface ICategoriesProps {
    category: ICategory
}

export interface ICategory {
    title: string
    groups: IGroup[]
}


export interface IGroup {
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

            <div className={Style.groupsContainer}>
                {props.category.groups.map(item => <Card key={item.id} group={item} />)}
            </div>
        </div>
    )
}

export default CategoryDetail