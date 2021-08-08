import { render } from '@testing-library/react';
import { Orders } from './Orders';

describe('Orders', () => {
  it('renders no Orders', () => {
    const handleRemoveHereOrder = jest.fn();
    const handleRemoveTogoOrder = jest.fn();
    const wrapper = render(
      <Orders
        hereOrders={[]}
        togoOrders={[]}
        removeHereOrder={handleRemoveHereOrder}
        removeTogoOrder={handleRemoveTogoOrder}
      />
    );
    expect(wrapper.queryByText('Togo Orders')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Here Orders')).not.toBeInTheDocument();
  });

  it('renders Togo Orders', () => {
    const handleRemoveHereOrder = jest.fn();
    const handleRemoveTogoOrder = jest.fn();
    const wrapper = render(
      <Orders
        hereOrders={[]}
        togoOrders={[
          { id: '1', item: '2', price: '3.50' },
          { id: '2', item: '3', price: '1.45' },
        ]}
        removeHereOrder={handleRemoveHereOrder}
        removeTogoOrder={handleRemoveTogoOrder}
      />
    );
    expect(wrapper.getByText('Togo Orders')).toBeInTheDocument();
    expect(wrapper.queryByText('Here Orders')).not.toBeInTheDocument();
    expect(wrapper.getAllByTestId('togo-order')).toHaveLength(2);
  });

  it('only renders Here Orders', () => {
    const handleRemoveHereOrder = jest.fn();
    const handleRemoveTogoOrder = jest.fn();
    const wrapper = render(
      <Orders
        hereOrders={[
          { id: '1', item: '2', price: '3.50' },
          { id: '2', item: '3', price: '1.45' },
        ]}
        togoOrders={[]}
        removeHereOrder={handleRemoveHereOrder}
        removeTogoOrder={handleRemoveTogoOrder}
      />
    );
    expect(wrapper.getByText('Here Orders')).toBeInTheDocument();
    expect(wrapper.queryByText('Togo Orders')).not.toBeInTheDocument();
    expect(wrapper.getAllByTestId('here-order')).toHaveLength(2);
  });

  it('renders horizontal rule between orders', () => {
    const handleRemoveHereOrder = jest.fn();
    const handleRemoveTogoOrder = jest.fn();
    const wrapper = render(
      <Orders
        hereOrders={[
          { id: '1', item: '2', price: '3.50' },
          { id: '2', item: '3', price: '1.45' },
        ]}
        togoOrders={[
          { id: '1', item: '2', price: '3.50' },
          { id: '2', item: '3', price: '1.45' },
        ]}
        removeHereOrder={handleRemoveHereOrder}
        removeTogoOrder={handleRemoveTogoOrder}
      />
    );
    expect(wrapper.getByText('Togo Orders')).toBeInTheDocument();
    expect(wrapper.getByText('Here Orders')).toBeInTheDocument();
    expect(wrapper.getByTestId('order-break')).toBeInTheDocument();
  });
});
