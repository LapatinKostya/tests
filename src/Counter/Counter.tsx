import classes from "./Counter.module.css";
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import React, {Dispatch, FormEvent, SetStateAction} from "react";
import {NumberInput} from "./NumberInput/NumberInput";

export type CounterPropsType = {
    count: number
    reset: () => void
    plusCount: () => void
    error: boolean
    settingMode: boolean
    start: number
    max: number
    setStart: Dispatch<SetStateAction<number>>
    setMax: Dispatch<SetStateAction<number>>
    setError: Dispatch<SetStateAction<boolean>>
    setSettingMode: () => void
}

export const Counter = ({
                            count,
                            reset,
                            plusCount,
                            error,
                            settingMode,
                            start,
                            setStart,
                            max,
                            setMax,
                            setError,
                            setSettingMode,
                            ...props
                        }: CounterPropsType) => {

    const changeMaxValueHandler = (e: FormEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setError(Number(e.currentTarget.value) <= start)
    }

    const changeStartValueHandler = (e: FormEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
        setError(Number(e.currentTarget.value) >= max)
    }

    return (
        <div className={classes.counter}>
            {!settingMode ?
                <Display count={count} error={error}/>
                : <div className={classes.display}>
                    <NumberInput title={'max value:'} value={max} error={error} inInput={changeMaxValueHandler}/>
                    <NumberInput title={'start value:'} value={start} error={error} inInput={changeStartValueHandler}/>
                </div>
            }
            {!settingMode ?
                <div className={classes.panel}>
                    <Button title={'inc'} onClick={plusCount} error={error}/>
                    <Button title={'reset'} onClick={reset} error={false}/>
                    <Button title={'set'} onClick={setSettingMode} error={false}/>
                </div>
                :
                <div className={classes.panel}>
                    <Button title={'set'} onClick={setSettingMode} error={error}/>
                </div>
            }

        </div>
    )
}
