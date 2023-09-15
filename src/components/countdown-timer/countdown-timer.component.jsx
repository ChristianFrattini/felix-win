import './countdown-timer.styles.scss'

import { useState, useEffect } from 'react';
import { _EXTRACTION_DATE_ISO } from '../../var/var'
import { useData } from '../../contexts/data.context'

const CountdownTimer = ({targetDate}) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());


  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  });

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;
    

    if (timeDifference <= 0) {
      // The target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className='countdown-timer-container'>
      <h3 className='header'>Next draw in:</h3>
      <div className='timer-values-container'>
        <span className='timer-values'>{timeRemaining.days} days </span>
        <span className='timer-values'>{timeRemaining.hours} hours </span>
        <span className='timer-values'>{timeRemaining.minutes} minutes </span>
        <span className='timer-values'>{timeRemaining.seconds} seconds </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
