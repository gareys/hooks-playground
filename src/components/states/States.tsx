import React, { useState } from 'react';
import styled from 'styled-components';
import { useAsyncHook } from '../../hooks/useAsyncHook';
type State = {
  id: number;
  name: string;
  abv: string;
  capital: string;
  largest_city: string;
  admitted_to_union: string;
  population: string;
  flag: string;
};
export const States = () => {
  const [states, setStates] = useState<State[]>([]);
  useAsyncHook(async () => {
    const statesResp = await fetch(
      'https://api.sampleapis.com/the-states/the-states'
    );
    const statesJson = await statesResp.json();
    setStates(statesJson);
  }, []);

  return (
    <StateList>
      {states.map((state) => (
        <li key={state.id}>
          <StateTitle>
            <FlagImg src={state.flag} alt={`${state.name}'s flag`} />
            <h2>
              {state.name} ({state.abv})
            </h2>
          </StateTitle>
          <StateDescription>
            <p>Capital: {state.capital}</p>
            <p>Largest City: {state.largest_city}</p>
            <p>Population: {state.population}</p>
            <p>Joined the Union: {state.admitted_to_union}</p>
          </StateDescription>
        </li>
      ))}
    </StateList>
  );
};

const StateList = styled.ul`
  list-style: none;
`;

const StateTitle = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`;

const StateDescription = styled.div`
  margin-left: calc(2em + 25px);
`;

const FlagImg = styled.img`
  width: 2em;
  margin-right: 20px;
`;
