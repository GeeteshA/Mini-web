import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [error, setError] = useState('');

  const startHandler = (event) => {
    event.preventDefault();
    setError('');
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setTime(0);
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <div className="container">
        <h2>STOPWATCH</h2>
        <div className="content">
          <div className="timer">
            <h4 className="time">{formatTime(time)}</h4>
          </div>
          {error && <p id="error">{error}</p>}
          <div className="btn-group">
            <button className="start" onClick={startHandler}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button className="reset" onClick={resetHandler}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
