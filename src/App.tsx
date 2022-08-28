import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";


function App() {

    const start = 0
    const end = 5

    const [count, setCount] = useState<number>(start)

    const plusCount = () => {
        if (count < end) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={'wrapper'}>
            <Counter
                start={start}
                end={end}
                title={count}
                plusCount={plusCount}
                resetCount={resetCount}
            />
        </div>
    )
}

export default App;
