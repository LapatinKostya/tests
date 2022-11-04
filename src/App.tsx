import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(5)
    const [count, setCount] = useState(start)
    const [error, setError] = useState(start >= max)
    const [settingMode, setSettingMode] = useState(true)

    useEffect(() => {
        let valueAsString = localStorage.getItem("startValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStart(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(start))
    }, [start])


    const resetCount = () => {
        setCount(start)
        setError(start >= max)
    }

    const incCount = () => {
        if (!error) {
            if (count >= max - 1) {
                setError(true)
            }
            setCount(count + 1)
        }
    }

    const setStartCount = () => {
        setCount(start)
        setError(start >= max)
        setSettingMode(!settingMode)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                reset={resetCount}
                plusCount={incCount}
                error={error}
                settingMode={settingMode}
                start={start}
                setStart={setStart}
                max={max}
                setMax={setMax}
                setError={setError}
                setSettingMode={setStartCount}
            />
        </div>
    );
}

export default App;
