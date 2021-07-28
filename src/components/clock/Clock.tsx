import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { CenterPin, Face, Markers } from './ClockParts';

export const Clock = ({ time = new Date() }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (360 / 12) * (hours + (minutes + seconds / 60) / 60);
  const minuteDegrees = (360 / 60) * (minutes + seconds / 60);
  const secondDegrees = (360 / 60) * seconds;

  return (
    <Face>
      <Markers />
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
              : 'transform .025s cubic-bezier(1,1.8,1,1.8)'
          }`,
        }}
      />
      <CenterPin />
    </Face>
  );
};
