import { act, render } from '@testing-library/react';
import { OrderTape } from './OrderTape';

describe('OrderTape', () => {
  it('adds a togo order to the Order Tape', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Togo').click());
    expect(wrapper.getByTestId('togo-order')).toBeInTheDocument();
  });

  it('adds a here order to the Order Tape', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Here').click());
    expect(wrapper.getByTestId('here-order')).toBeInTheDocument();
  });
});
