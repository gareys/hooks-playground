import React from 'react';
import styled from 'styled-components';
export const Case = styled.div`
  height: 320px;
  width: 320px;
  background: linear-gradient(135deg, #666 0%, #444 60%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Face = styled.div`
  height: 300px;
  width: 300px;
  background: linear-gradient(135deg, #fafafa 0%, #eeeeee 60%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .hand {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 0;

    &:before,
    &:after {
      content: '';
      margin: 0;
    }
    &:after {
      visibility: hidden;
    }
  }

  .hour.hand {
    &:before,
    &:after {
      height: 60px;
      width: 3px;
      background: white;
      border: 2px solid black;
      border-top: 10px solid black;
      border-bottom: 20px solid black;
    }
  }

  .minute.hand {
    &:before,
    &:after {
      height: 82px;
      width: 2px;
      background: white;
      border: 2px solid black;
      border-top: 10px solid black;
      border-bottom: 25px solid black;
    }
  }

  .second.hand {
    &:before,
    &:after {
      height: 150px;
      width: 2px;
      background: red;
    }
    &:after {
      height: 90px;
    }
  }
`;

export const CenterPin = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  border: 5px solid red;
`;

export const Markers = () => {
  return (
    <>
      <FaceMarkers>
        {Array(60)
          .fill('')
          .map((_, i) => (
            <FaceMarker number={i + 1} key={i + 1} />
          ))}
      </FaceMarkers>
      <FaceNumbers>
        {Array(12)
          .fill('')
          .map((_, i) => (
            <FaceNumber number={i + 1} key={i + 1}>
              <span>{i + 1}</span>
            </FaceNumber>
          ))}
      </FaceNumbers>
    </>
  );
};

const FaceNumbers = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  top: 20px;
  left: 20px;
  font-size: 18px;
  background: #eee;
  background: linear-gradient(135deg, #fafafa 0%, #eeeeee 60%);
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
`;

const FaceMarkers = styled.div`
  position: absolute;
  width: 290px;
  height: 290px;
  top: 5px;
  left: 5px;
  font-size: 18px;
  background: #cfcfcf;
  background: linear-gradient(135deg, #cccccc 0%, #fafafa 60%);
  border-radius: 50%;
`;

const FaceMarker = styled.div<{ number: number }>`
  font-weight: bold;
  width: 290px;
  height: 290px;
  position: absolute;
  color: black;
  transform: rotate(${({ number }) => 6 * number}deg);

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    content: '|';
    font-size: ${({ number }) => (number % 5 === 0 ? '12px' : '10px')};
    font-weight: ${({ number }) => (number % 5 === 0 ? 'bold' : 'normal')};
    line-height: 12px;
    color: #666;
  }
  &:after {
    bottom: 2px;
    top: auto;
  }
`;

const FaceNumber = styled.div<{ number: number }>`
  font-weight: bold;
  width: 190px;
  height: 190px;
  position: absolute;
  top: 35px;
  left: 35px;
  color: black;

  transform: rotate(${({ number }) => 30 * (number + 1.52)}deg);
  span {
    display: inline-block;
    width: 20px;
    text-align: center;
    transform: rotate(${({ number }) => -30 * (number + 1.52)}deg);
  }
`;

export const Glass = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset -1px -1px 10px rgba(0, 0, 0, 0.5);
  background: -moz-radial-gradient(
    bottom right,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
  background: radial-gradient(
    to top left,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
  background: -webkit-radial-gradient(
    bottom right,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
`;

export const Day = styled.div<{ day: number }>`
  position: absolute;
  transform: translateX(80px) translateY(2px);
  color: #000;
  background: #fff;
  font-size: 14px;
  border: 2px solid white;
  width: 20px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.6);
`;
