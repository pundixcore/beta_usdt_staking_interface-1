import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>-</span>
      {/* <p>-</p> */}
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'days'} isDanger={days <= 1} />
        {/* <p>:</p> */}
        <DateTimeDisplay value={hours} type={'hours'} isDanger={false} />
        {/* <p>:</p> */}
        <DateTimeDisplay value={minutes} type={'mins'} isDanger={false} />
        {/* <p>:</p> */}
        {/* <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} /> */}
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
