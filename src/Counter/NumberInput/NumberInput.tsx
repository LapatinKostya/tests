import classes from "./NumberInput.module.css";
import React, {FormEvent} from "react";

type  NumberInputPropsType = {
    value: number
    error: boolean
    inInput: (e: FormEvent<HTMLInputElement>) => void
    title: string
}

export const NumberInput = ({value, inInput, error,title, ...props}: NumberInputPropsType) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{title}</div>
            <input
                type={"number"}
                value={value}
                className={!error ? classes.inputNumber : `${classes.inputNumber} ${classes.inputError}`}
                onInput={inInput}
            />
        </div>
    )
}