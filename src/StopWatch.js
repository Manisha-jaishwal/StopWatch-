import { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {minutes}:{seconds}</p>

      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
