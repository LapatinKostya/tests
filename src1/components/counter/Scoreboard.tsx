import React from "react";

type scoreboardPropsType = {
    title: number
    className?: string
}

export const Scoreboard = (props: scoreboardPropsType) => {
    return (
        <div className={props.className}>{props.title}</div>
    )
}