import React from 'react';
import styled from 'styled-components';
import { OrderType, UniqOrder } from '../constants';

export const Order = ({
  price,
  size,
  type,
}: {
  price: UniqOrder['price'];
  size: UniqOrder['size'];
  type: OrderType;
}) => {
  return (
    <OrderContainer>
      <Size>{size}</Size>
      <Price type={type}>{price}</Price>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  animation: fadeIn 1s;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Size = styled.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`;

const Price = styled.span<{ type: OrderType }>`
  flex: 1;
  text-align: left;
  color: ${({ type }) =>
    type === 'sell' ? 'rgb(250,103,45)' : 'rgb(45,175,52)'};
  padding-left: 25px;
`;
