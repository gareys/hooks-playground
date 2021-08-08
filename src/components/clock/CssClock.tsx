import { useEffect, useLayoutEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Face, CenterPin, Markers, Glass, Case, Day } from './ClockParts';
type BPS = 'smooth' | 1 | 2 | 4 | 8 | 12;
const bpsOptions: BPS[] = ['smooth', 1, 2, 4, 8, 12];
export const CssClock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [bps, setBps] = useState<BPS>(1);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setShouldRender(false);
  }, [bps]);

  useEffect(() => {
    if (!shouldRender) {
      setTime(new Date(new Date().setMilliseconds(0)));
      setShouldRender(true);
    }
  }, [shouldRender]);

  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();

  const hourDegrees = (360 / 12) * (hours + (minutes + seconds / 60) / 60);
  const minuteDegrees = (360 / 60) * (minutes + seconds / 60);
  const secondDegrees = (360 / 60) * (seconds + milliseconds / 1000);

  return (
    <>
      <BPSSelector>
        <select
          defaultValue={bps}
          onChange={(ev) => setBps(ev.target.value as BPS)}
        >
          {bpsOptions.map((bpsOption) => (
            <option key={bpsOption} value={bpsOption}>
              {bpsOption} bps
            </option>
          ))}
        </select>
      </BPSSelector>
      {shouldRender && (
        <Case>
          <Face>
            <GlobalStyle
              hourDegrees={hourDegrees}
              minuteDegrees={minuteDegrees}
              secondDegrees={secondDegrees}
              bps={bps}
            />
            <Markers />
            <Day day={day}>{day}</Day>
            <HourHand className="hour hand" degrees={hourDegrees} />
            <MinuteHand className="minute hand" degrees={minuteDegrees} />
            <SecondHand className="second hand" degrees={secondDegrees} />
            <CenterPin />
            <Glass />
          </Face>
        </Case>
      )}
    </>
  );
};

const GlobalStyle = createGlobalStyle<{
  hourDegrees: number;
  minuteDegrees: number;
  secondDegrees: number;
  bps: BPS;
}>`
  .hand {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .second.hand {
    animation-timing-function: ${({ bps }) =>
      bps === 'smooth' ? 'linear' : `steps(${bps * 60}, end)`}
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

const BPSSelector = styled.div`
  position: relative;
  z-index: 2;
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
