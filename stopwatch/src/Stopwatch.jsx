import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 
  const [error, setError] = useState(''); 

  const startHandler = (event) => {
    event.preventDefault();
    setError(''); 

    if (isRunning) {
      
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true); 
    }
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setTime(0); 
    clearInterval(intervalRef.current);
    setIsRunning(false); 
  };

  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60); 
    const seconds = timeInSeconds % 60; 
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); 

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

export default Stopwatch;
