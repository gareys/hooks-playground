import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Order } from './Order';

describe('Order', () => {
  it('renders an Order', () => {
    const handleRemoveOrder = jest.fn();
    const wrapper = render(
      <Order
        number="1"
        price="3.50"
        item="10"
        type="togo"
        removeOrder={handleRemoveOrder}
      />
    );
    expect(wrapper.container).toHaveTextContent('1103.50Complete');
  });
  it('calls handleRemoveOrder onClick', () => {
    const handleRemoveOrder = jest.fn();
    const wrapper = render(
      <Order
        number="1"
        price="3.50"
        item="10"
        type="togo"
        removeOrder={handleRemoveOrder}
      />
    );
    wrapper.getByText('Complete').click();
    expect(handleRemoveOrder.mock.calls.length).toBe(1);
  });
});
