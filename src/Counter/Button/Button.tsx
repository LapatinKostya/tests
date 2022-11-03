import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string
    onClick: () => void
    error: boolean
}
export const Button = ({title, onClick, error, ...props}: ButtonPropsType) => {
    return (
        <div className={classes.wrapper}>
            <button
                className={!error ? classes.button : `${classes.button} ${classes.error}`}
                onClick={onClick}
                disabled={error}
            >{title}</button>
        </div>
    )
}