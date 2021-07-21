import React from 'react';
import { Orders } from './orders/Orders';
import { useState } from 'react';
import styled from 'styled-components';
import { UniqOrder, generateOrder, OrderType } from './constants';

export const TickerTape = () => {
  const [buyOrders, setBuyOrders] = useState<UniqOrder[]>([]);
  const [sellOrders, setSellOrders] = useState<UniqOrder[]>([]);

  const handleAddSellOrder = () => {
    setSellOrders((prevSellOrders) =>
      [...prevSellOrders, generateOrder()].sort(
        (orderA, orderB) => Number(orderB.price) - Number(orderA.price)
      )
    );
  };

  const handleAddBuyOrder = () => {
    setBuyOrders((prevSellOrders) =>
      [...prevSellOrders, generateOrder()].sort(
        (orderA, orderB) => Number(orderB.price) - Number(orderA.price)
      )
    );
  };

  return (
    <TickerContainer>
      <ButtonContainer>
        <OrderButton onClick={handleAddBuyOrder} orderType="buy">
          Buy
        </OrderButton>
        <OrderButton onClick={handleAddSellOrder} orderType="sell">
          Sell
        </OrderButton>
      </ButtonContainer>
      <Orders buyOrders={buyOrders} sellOrders={sellOrders} />
    </TickerContainer>
  );
};

const TickerContainer = styled.div`
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
    orderType === 'sell' ? '#ec551a' : '#35b83b'};
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
