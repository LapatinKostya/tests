import classes from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callback: () => void
    disable: boolean
}

export const Button = (props: ButtonPropsType) => {


    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button
            className={`${classes.button} ${props.disable ? classes.disable : ''}`}
            onClick={onClickHandler}
        >
            {props.title}
        </button>
    )
}