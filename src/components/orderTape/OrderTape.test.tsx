import { act, render, within } from '@testing-library/react';
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

  it('removes a togo order from the Order Tape', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Togo').click());
    expect(wrapper.getByTestId('togo-order')).toBeInTheDocument();
    act(() => wrapper.getByTestId('remove-order').click());
    expect(wrapper.queryByTestId('togo-order')).not.toBeInTheDocument();
  });

  it('removes a here order from the Order Tape', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Here').click());
    expect(wrapper.getByTestId('here-order')).toBeInTheDocument();
    act(() => wrapper.getByTestId('remove-order').click());
    expect(wrapper.queryByTestId('here-order')).not.toBeInTheDocument();
  });

  it('sorts here Orders by id when adding an order', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Here').click());
    const firstOrder = wrapper.getByTestId('here-order');
    act(() => wrapper.getByText('Here').click());
    const orders = wrapper.getAllByTestId('here-order');
    expect(orders).toHaveLength(2);
    expect(orders[0].textContent?.slice(0, 4)).not.toEqual(
      firstOrder.textContent?.slice(0, 4)
    );
  });

  it('sorts togo Orders by id when adding an order', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Togo').click());
    const firstOrder = wrapper.getByTestId('togo-order');
    act(() => wrapper.getByText('Togo').click());
    const orders = wrapper.getAllByTestId('togo-order');
    expect(orders).toHaveLength(2);
    expect(orders[0].textContent?.slice(0, 4)).not.toEqual(
      firstOrder.textContent?.slice(0, 4)
    );
  });

  it('sorts here Orders by id when removing an order', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Here').click());
    const firstOrder = wrapper.getByTestId('here-order');
    act(() => wrapper.getByText('Here').click());
    act(() => wrapper.getByText('Here').click());
    const orders = wrapper.getAllByTestId('here-order');
    expect(orders).toHaveLength(3);
    expect(orders[0].textContent?.slice(0, 4)).not.toEqual(
      firstOrder.textContent?.slice(0, 4)
    );
    act(() => within(orders[0]).getByTestId('remove-order').click());
    const newOrders = wrapper.getAllByTestId('here-order');
    expect(newOrders[0].textContent?.slice(0, 4)).toEqual(
      orders[1].textContent?.slice(0, 4)
    );
  });

  it('sorts togo Orders by id when removing an order', () => {
    const wrapper = render(<OrderTape />);
    act(() => wrapper.getByText('Togo').click());
    const firstOrder = wrapper.getByTestId('togo-order');
    act(() => wrapper.getByText('Togo').click());
    act(() => wrapper.getByText('Togo').click());
    const orders = wrapper.getAllByTestId('togo-order');
    expect(orders).toHaveLength(3);
    expect(orders[0].textContent?.slice(0, 4)).not.toEqual(
      firstOrder.textContent?.slice(0, 4)
    );
    act(() => within(orders[0]).getByTestId('remove-order').click());
    const newOrders = wrapper.getAllByTestId('togo-order');
    expect(newOrders[0].textContent?.slice(0, 4)).toEqual(
      orders[1].textContent?.slice(0, 4)
    );
  });
});
