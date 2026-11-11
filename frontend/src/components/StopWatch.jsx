
import React, { useState, useEffect } from "react";
import axios from "axios";

function StopWatch() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [apiMessage, setApiMessage] = useState("");

    // Stopwatch logic
    useEffect(() => {

        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(timer);

    }, [isRunning]);

    // Start stopwatch
    const startTimer = () => {
        setIsRunning(true);
    };

    // Stop stopwatch
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Reset stopwatch
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    // Format time
    const formatTime = () => {

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return (
            String(hrs).padStart(2, "0") + ":" +
            String(mins).padStart(2, "0") + ":" +
            String(secs).padStart(2, "0")
        );
    };

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>

            <h1>React + Node.js Stopwatch</h1>

            <h2 style={{ fontSize: "40px" }}>
                {formatTime()}
            </h2>

            <button onClick={startTimer} disabled={isRunning}>
                Start
            </button>

            <button onClick={stopTimer} disabled={!isRunning}>
                Stop
            </button>

            <button onClick={resetTimer}>
                Reset
            </button>

            <hr />

            

        </div>
    );
}

export default StopWatch;
