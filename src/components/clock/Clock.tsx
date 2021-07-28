import React from 'react';
import styled from 'styled-components';

const roundedNumber = (num: number) =>
  Number((Math.round(num * 100) / 100).toFixed(2));

export const Clock = ({ time = new Date() }) => {
  const timeParsed = new Date(time).toLocaleString().substr(11, 8).split(':');
  const hours = Number(timeParsed[0]);
  const minutes = Number(timeParsed[1]);
  const seconds = Number(timeParsed[2]);

  const hourDegrees = roundedNumber(
    (360 / 12) * (hours + roundedNumber(minutes / 60))
  );
  const minuteDegrees = roundedNumber(
    (360 / 60) * (minutes + roundedNumber(seconds / 60))
  );
  const secondDegrees = (360 / 60) * seconds;

  return (
    <Face>
      <SecondHand
        className="hand"
        style={{ transform: `rotate(${secondDegrees}deg` }}
      />
      <MinuteHand
        className="hand"
        style={{ transform: `rotate(${minuteDegrees}deg` }}
      />
      <HourHand
        className="hand"
        style={{ transform: `rotate(${hourDegrees}deg` }}
      />
      <CenterPin />
    </Face>
  );
};

const Face = styled.div`
  height: 300px;
  width: 300px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > .hand {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 0;
  }
`;

const HourHand = styled.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 100px;
    width: 4px;
    background: white;
  }
  &:after {
    visibility: hidden;
  }
`;

const MinuteHand = styled.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 125px;
    width: 4px;
    background: black;
  }
  &:after {
    visibility: hidden;
  }
`;

const SecondHand = styled.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 130px;
    width: 2px;
    background: red;
  }
  &:after {
    visibility: hidden;
  }
`;
const CenterPin = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`;
