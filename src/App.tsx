import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

    const [start, setStart] = useState(0)
    const [max, setMax] = useState(5)
    const [count, setCount] = useState(0)
    const [error, setError] = useState(start >= max)
    const [settingMode, setSettingMode] = useState(false)

    useEffect(() => {
        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            let newValue = JSON.parse(startValueAsString)
            setStart(newValue)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMax(newValue)
        }
    }, [])

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
        localStorage.setItem("startValue", JSON.stringify(start))
        localStorage.setItem("maxValue", JSON.stringify(max))
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
