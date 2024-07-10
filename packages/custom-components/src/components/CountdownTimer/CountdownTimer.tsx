import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: {
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
    };

    timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      {timeLeft.days !== undefined && timeLeft.days > 0 && (
        <span>{timeLeft.days} days </span>
      )}
      {timeLeft.hours !== undefined && <span>{timeLeft.hours} hours </span>}
      {timeLeft.minutes !== undefined && <span>{timeLeft.minutes} minutes </span>}
      {timeLeft.seconds !== undefined && <span>{timeLeft.seconds} seconds </span>}
      {timeLeft.days !== undefined && timeLeft.days <= 0 && <span>left</span>}
    </div>
  );
};

export default CountdownTimer;