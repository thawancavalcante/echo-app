import Style from './style.module.css'

interface IButtonProps {
    active: boolean
    onClick: () => void
    children: React.JSX.Element
    tooltip: string
}

const Button = (props: IButtonProps) => {
    return (
        <button
            data-text={props.tooltip}
            className={[Style.button, props.active ? Style.active : ''].join(' ')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button