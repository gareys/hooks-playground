import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Face, CenterPin, Markers } from './ClockParts';

export const CssClock = ({ time = new Date() }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  const hourDegrees = (360 / 12) * (hours + (minutes + seconds / 60) / 60);
  const minuteDegrees = (360 / 60) * (minutes + seconds / 60);
  const secondDegrees = (360 / 60) * (seconds + milliseconds / 1000);

  return (
    <Face>
      <GlobalStyle
        hourDegrees={hourDegrees}
        minuteDegrees={minuteDegrees}
        secondDegrees={secondDegrees}
      />
      <Markers />
      <HourHand className="hour hand" degrees={hourDegrees} />
      <MinuteHand className="minute hand" degrees={minuteDegrees} />
      <SecondHand className="second hand" degrees={secondDegrees} />
      <CenterPin />
    </Face>
  );
};

const GlobalStyle = createGlobalStyle<{
  hourDegrees: number;
  minuteDegrees: number;
  secondDegrees: number;
}>`
  .hand {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotateHours {
    from {
      transform: rotate(${({ hourDegrees }) => hourDegrees}deg);
    }
    to {
      transform: rotate(${({ hourDegrees }) => hourDegrees + 360}deg);
    }
  }
  @keyframes rotateMinutes {
    from {
      transform: rotate(${({ minuteDegrees }) => minuteDegrees}deg);
    }
    to {
      transform: rotate(${({ minuteDegrees }) => minuteDegrees + 360}deg);
    }
  }
  @keyframes rotateSeconds {
    from {
      transform: rotate(${({ secondDegrees }) => secondDegrees}deg);
    }
    to {
      transform: rotate(${({ secondDegrees }) => secondDegrees + 360}deg);
    }
  }
`;

const HourHand = styled.div<{ degrees: number }>`
  animation-name: rotateHours;
  animation-duration: 43200s;
  transform: rotate(${({ degrees }) => degrees}deg);
`;

const MinuteHand = styled.div<{ degrees: number }>`
  animation-name: rotateMinutes;
  animation-duration: 3600s;
  transform: rotate(${({ degrees }) => degrees}deg);
`;

const SecondHand = styled.div<{ degrees: number }>`
  animation-name: rotateSeconds;
  animation-duration: 60s;
  transform: rotate(${({ degrees }) => degrees}deg);
`;
