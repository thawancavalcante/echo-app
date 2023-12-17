import Style from './style.module.css'

interface IButtonProps {
    active: boolean
    onClick: () => void
    label: string
}

const Button = (props: IButtonProps) => {
    return (
        <button className={[Style.button, props.active ? Style.active : ''].join(' ')} onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default Button