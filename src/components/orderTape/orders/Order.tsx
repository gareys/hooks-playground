import React from 'react';
import styled from 'styled-components';
import { OrderType, UniqOrder } from '../constants';

export const Order = ({
  number,
  price,
  item,
  type,
  removeOrder,
}: {
  number: string;
  price: UniqOrder['price'];
  item: UniqOrder['item'];
  type: OrderType;
  removeOrder: () => void;
}) => {
  return (
    <OrderContainer>
      <span>{number}</span>
      <Item>{item}</Item>
      <Price type={type}>{price}</Price>
      <button onClick={removeOrder}>Complete</button>
    </OrderContainer>
  );
};

export const OrderHeader = ({ type }: { type: OrderType }) => {
  return (
    <OrderContainer>
      <span>Order</span>
      <Item>Item</Item>
      <Price type={type}>Price</Price>
      <span>Complete</span>
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

const Item = styled.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`;

const Price = styled.span<{ type: OrderType }>`
  flex: 1;
  text-align: left;
  color: ${({ type }) => (type === 'togo' ? '#fae52d' : '#30bb37')};
  padding-left: 25px;
`;
