import React, {useState} from "react";
import {Button} from "./Button";
import {Scoreboard} from "./Scoreboard";
import classes from "./Counter.module.css";

export const Counter = () => {

    const start = 0
    const max = 5

    const [counterValue, setCounterValue] = useState<number>(start)

    const plusCounter = () => {
        if (counterValue < max) {
            setCounterValue(counterValue + 1)
        }
    }
    const resetCounter = () => {
        setCounterValue(start)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.scoreboardWrapper}>
                <Scoreboard
                    className={counterValue === max ? classes.full : '' && classes.scoreboard}
                    title={counterValue}/>
            </div>
            <div className={classes.buttonWrapper}>
                <Button
                    title={'inc'}
                    action={plusCounter}
                    disabled={counterValue === max}
                    className={classes.button}
                />
                <Button
                    title={'reset'}
                    action={resetCounter}
                    disabled={counterValue === start}
                    className={classes.button}
                />
            </div>
        </div>
    );
}