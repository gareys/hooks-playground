import { useMemo } from 'react';
import { Order, OrderHeader } from './Order';
import styled from 'styled-components';
import { UniqOrder } from '../constants';

export const Orders = ({
  hereOrders,
  togoOrders,
  removeHereOrder,
  removeTogoOrder,
}: {
  hereOrders: UniqOrder[];
  togoOrders: UniqOrder[];
  removeHereOrder: (id: string) => void;
  removeTogoOrder: (id: string) => void;
}) => {
  const memoedHereOrders = useMemo(
    () =>
      hereOrders.map(({ id, item, price }) => (
        <Order
          key={id}
          number={id}
          price={price}
          item={item}
          type="here"
          removeOrder={() => {
            removeHereOrder(id);
          }}
        />
      )),
    [hereOrders]
  );
  const memoedTogoOrders = useMemo(
    () =>
      togoOrders.map(({ id, item, price }) => (
        <Order
          key={id}
          number={id}
          price={price}
          item={item}
          type="togo"
          removeOrder={() => {
            removeTogoOrder(id);
          }}
        />
      )),
    [togoOrders]
  );
  return (
    <>
      {!!memoedTogoOrders.length && (
        <>
          <h3>Togo Orders</h3>
          <OrderHeader type="togo" />
          <br />
          {memoedTogoOrders}
        </>
      )}
      {!!togoOrders.length && !!hereOrders.length && (
        <Break data-testid="order-break" />
      )}
      {!!memoedHereOrders.length && (
        <>
          <h3>Here Orders</h3>
          <OrderHeader type="here" />
          <br />
          {memoedHereOrders}
        </>
      )}
    </>
  );
};

const Break = styled.hr`
  border-color: #333;
  width: 100%;
`;
