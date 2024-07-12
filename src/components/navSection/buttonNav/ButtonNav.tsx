import classes from './ButtonNav.module.scss'


interface IButtonNavProps {
    children: string;
    isActive: boolean;
    [key: string]: any
}

export function ButtonNav({children , isActive, ...props}: IButtonNavProps) {
    return (
        <button
            {...props}
            className={`
                ${isActive ? `${classes.activeBtn} ${classes.activeOrange}` : classes.disActiveBtn},
                ${classes.button}
                ${classes["inter-fontsHH"]}
            `}
        >{children}
        </button>
    )
}

export default ButtonNav