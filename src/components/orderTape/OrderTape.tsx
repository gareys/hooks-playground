import React from 'react';
import { Orders } from './orders/Orders';
import { useState } from 'react';
import styled from 'styled-components';
import { UniqOrder, generateOrder, OrderType } from './constants';

export const OrderTape = () => {
  const [hereOrders, setHereOrders] = useState<UniqOrder[]>([]);
  const [togoOrders, setTogoOrders] = useState<UniqOrder[]>([]);
  const [orderCount, setOrderCount] = useState<number>(0);

  const handleAddTogoOrder = () => {
    setTogoOrders((prevTogoOrders) =>
      [...prevTogoOrders, generateOrder(orderCount)].sort(
        (orderA, orderB) => Number(orderB.id) - Number(orderA.id)
      )
    );
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleAddHereOrder = () => {
    setHereOrders((prevHereOrders) =>
      [...prevHereOrders, generateOrder(orderCount)].sort(
        (orderA, orderB) => Number(orderB.id) - Number(orderA.id)
      )
    );
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleRemoveTogoOrder = (id: string) => {
    setTogoOrders((prevTogoOrders) =>
      prevTogoOrders
        .filter((order) => order.id !== id)
        .sort((orderA, orderB) => Number(orderB.id) - Number(orderA.id))
    );
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleRemoveHereOrder = (id: string) => {
    setHereOrders((prevHereOrders) =>
      prevHereOrders
        .filter((order) => order.id !== id)
        .sort((orderA, orderB) => Number(orderB.id) - Number(orderA.id))
    );
    setOrderCount((prevCount) => prevCount + 1);
  };

  return (
    <OrderContainer>
      <ButtonContainer>
        <OrderButton onClick={handleAddHereOrder} orderType="here">
          Here
        </OrderButton>
        <OrderButton onClick={handleAddTogoOrder} orderType="togo">
          Togo
        </OrderButton>
      </ButtonContainer>
      <Orders
        hereOrders={hereOrders}
        togoOrders={togoOrders}
        removeHereOrder={handleRemoveHereOrder}
        removeTogoOrder={handleRemoveTogoOrder}
      />
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const OrderButton = styled.button<{ orderType: OrderType }>`
  background-color: ${({ orderType }) =>
    orderType === 'togo' ? '#fae52d' : '#30bb37'};
  border: none;
  color: #fff;
  width: 250px;
  padding: 10px;
  @media screen and (max-width: 501px) {
    flex: 1;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
  @media screen and (max-width: 501px) {
    display: flex;
    width: 100%;
  }
`;
