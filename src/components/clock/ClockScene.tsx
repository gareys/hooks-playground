import React, { useState } from 'react';
import { Clock } from './Clock';
import { useInterval } from '../../hooks/useInterval';

export const ClockScene = () => {
  const [time, setTime] = useState<Date>(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return <Clock time={time} />;
};
