import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './style.module.css'
import Button from './components/Button'

interface IButtonItem {
    navigateTo: string
    children: React.JSX.Element
    tooltip: string
}

const Sidebar = () => {
    const navigate = useNavigate()
    const [activeIndex, setIndex] = useState<number>(0)

    //TODO: add new communities on sidebar
    const [items] = useState<IButtonItem[]>([
        {
            navigateTo: '/',
            children: <span className="material-icons-outlined">home</span>,
            tooltip: 'Homepage'
        },
        {
            navigateTo: 'communities',
            children: <>T.H</>,
            tooltip: 'Thawan Hahahaha'
        },
        {
            navigateTo: 'communities',
            children: <>T.H</>,
            tooltip: 'Thawan Hahahaha'
        },
    ])

    const handleNavigate = (item: IButtonItem, index: number): void => {
        if (index === activeIndex) {
            return
        }
        setIndex(index)
        navigate(item.navigateTo)
    }

    return (
        <div className={Style.container}>
            <div className={Style.items}>
                {items.map((item, index) => (
                    <Button
                        key={`${index}-${item.navigateTo}`}
                        active={index === activeIndex}
                        onClick={() => handleNavigate(item, index)}
                        tooltip={item.tooltip}
                    >
                        {item.children}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Sidebar