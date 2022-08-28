import React from "react";

type buttonPropsType = {
    title: string
    action: ()=>void
    disabled?: boolean
    className?: string
}

export const Button = (props: buttonPropsType) => {

    const onClickHandler = () => {
        props.action()
    }

    return (
        <button
            className={props.className}
            onClick={onClickHandler}
            disabled={props.disabled}
        >{props.title}</button>
    )
}