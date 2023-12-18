import { useState } from 'react'
import Button from '../Button'
import Style from './style.module.css'

interface ICategoryItem {
    navigateTo: string
    id: string
    label: string
}
//TODO:add the channels endpoint to load data
const categories: ICategoryItem[] = [
    {
        navigateTo: '',
        id: 'popular',
        label: 'Popular communities',
    },
    {
        navigateTo: '',
        id: '2',
        label: 'Category 1',
    },
    {
        navigateTo: '',
        id: '3',
        label: 'Category 2',
    },
    {
        navigateTo: '',
        id: '4',
        label: 'Category 3',
    },
    {
        navigateTo: '',
        id: '5',
        label: 'Category 4',
    },
    {
        navigateTo: '',
        id: '6',
        label: 'Category 5',
    },
]

interface ICategoriesProps {
    onChange: (id: string) => void
}

const Categories = (props: ICategoriesProps) => {
    const [currentId, setCurrentId] = useState<string>(categories[0].id)

    const handleNavigate = (item: ICategoryItem): void => {
        if (item.id === currentId) {
            return
        }

        setCurrentId(item.id)
        props.onChange(item.id)
    }

    return (
        <div className={Style.container}>
            <div className={Style.title}>Communities</div>
            {categories.map((item) => (
                <Button key={item.id} label={item.label} onClick={() => handleNavigate(item)} active={item.id === currentId} />
            ))}
        </div>
    )
}

export default Categories