import {Button} from "./Button/Button";
import classes from "./Counter.module.css";

type CounterPropsType = {
    start: number
    end: number
    title: number
    plusCount: ()=> void
    resetCount: ()=> void
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={classes.wrapper}>
            <div className={`${classes.display} ${props.title === props.end ? classes.error: ''}`}>{props.title}</div>
            <div className={classes.buttonBlock}>
                <Button title={'inc'} callback={props.plusCount} disable={props.title === props.end}/>
                <Button title={'reset'} callback={props.resetCount} disable={props.title !== props.end}/>
            </div>
        </div>
    )
}