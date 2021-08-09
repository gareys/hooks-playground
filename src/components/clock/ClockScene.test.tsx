import { act, render } from '@testing-library/react';
import { ReactNode } from 'react';
import * as ClockModule from './Clock';
import { ClockScene } from './ClockScene';

describe('ClockScene', () => {
  it('renders the clock updating props on a 1 second interval', () => {
    jest.useFakeTimers();
    const mockedClock = jest.fn(() => <></>);
    jest.spyOn(ClockModule, 'Clock').mockImplementation(mockedClock);
    const time = new Date();
    const time2 = new Date(time);
    const currentSeconds = time.getSeconds();
    const nextTime = new Date(time2.setSeconds(currentSeconds + 1));
    render(<ClockScene />);
    expect(mockedClock.mock.calls[0]).toEqual(
      expect.arrayContaining([expect.objectContaining({ time })])
    );
    setTimeout(() => {
      act(() => {
        expect(mockedClock.mock.calls[1]).toEqual(
          expect.arrayContaining([expect.objectContaining({ time: nextTime })])
        );
        jest.runAllTimers();
      });
    }, 1000);
  });
});
