import classes from "./Counter.module.css";
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";

export type CounterPropsType = {
    count: number
    reset: () => void
    plusCount: () => void
    error: boolean
}

export const Counter = ({count, reset, plusCount, error, ...props}: CounterPropsType) => {

    return (
        <div className={classes.counter}>
            <Display count={count} error={error}/>
            <div className={classes.panel}>
                <Button title={'inc'} onClick={plusCount} error={error}/>
                <Button title={'reset'} onClick={reset} error={!error}/>
            </div>
        </div>
    )
}
