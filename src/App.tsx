import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
    const [count, setCount] = useState(0)
    const [error, setError] = useState(false)

    const resetCount = ()=> {
        setCount(0)
        setError(false)
    }
    const incCount = ()=> {
        if (count>= 4) {
            setError(true)
        }
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                reset={resetCount}
                plusCount={incCount}
                error={error}
            />
        </div>
    );
}

export default App;
