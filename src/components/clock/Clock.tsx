import React from 'react';
import { Case, CenterPin, Day, Face, Glass, Markers } from './ClockParts';

export const Clock = ({ time = new Date() }) => {
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (360 / 12) * (hours + (minutes + seconds / 60) / 60);
  const minuteDegrees = (360 / 60) * (minutes + seconds / 60);
  const secondDegrees = (360 / 60) * seconds;

  return (
    <Case>
      <Face>
        <Markers />
        <Day day={day}>{day}</Day>
        <div
          className="hour hand"
          style={{ transform: `rotate(${hourDegrees}deg` }}
        />
        <div
          className="minute hand"
          style={{ transform: `rotate(${minuteDegrees}deg` }}
        />
        <div
          className="second hand"
          style={{
            transform: `rotate(${secondDegrees}deg`,
            transition: `${
              secondDegrees === 0
                ? 'none'
                : 'transform .04s cubic-bezier(1,1.5,1,1.5)'
            }`,
          }}
        />
        <CenterPin />
        <Glass />
      </Face>
    </Case>
  );
};
