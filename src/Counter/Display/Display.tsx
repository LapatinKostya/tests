import classes from "./Display.module.css";

type DisplayPropsType = {
    count: number
    error: boolean
}

export const Display = ({count, error, ...props}: DisplayPropsType) => {
    return (
        <div className={!error? classes.display: `${classes.display} ${classes.error}`}>
            <div>{count}</div>
        </div>
    )
}