import React from 'react';
import { useMemo } from 'react';
import { Order } from './Order';
import styled from 'styled-components';
import { UniqOrder } from '../constants';

export const Orders = ({
  buyOrders,
  sellOrders,
}: {
  buyOrders: UniqOrder[];
  sellOrders: UniqOrder[];
}) => {
  const memoedBuyOrders = useMemo(
    () =>
      buyOrders.map(({ id, size, price }) => (
        <Order key={id} price={price} size={size} type="buy" />
      )),
    [buyOrders]
  );
  const memoedSellOrders = useMemo(
    () =>
      sellOrders.map(({ id, size, price }) => (
        <Order key={id} price={price} size={size} type="sell" />
      )),
    [sellOrders]
  );
  return (
    <>
      {memoedSellOrders}
      {sellOrders.length && buyOrders.length && <Break />}
      {memoedBuyOrders}
    </>
  );
};

const Break = styled.hr`
  border-color: #333;
  width: 100%;
`;
