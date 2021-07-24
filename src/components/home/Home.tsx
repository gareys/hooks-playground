import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import hookImg from '../../hook.svg';

export const Home = () => (
  <>
    <Heading>
      Hooks Playground
      <HookHolster>
        <Hook src={hookImg} />
      </HookHolster>
    </Heading>
    <hr />
    <p>Yarrrrr maties. There be many hooks examples in here. Ye be warned.</p>
    <h2>Examples</h2>
    <ProjectList>
      <li>
        <Link to="/colors">Colors</Link> - GraphQL Colors API w/ pagination
      </li>
      <li>
        <Link to="/countries">Countries</Link> - Basic async useEffect w/
        countries API
      </li>
      <li>
        <Link to="/states">The United States</Link> - Custom useAsyncHook w/
        U.S. API
      </li>
      <li>
        <Link to="/tictactoe">Tic Tac Toe</Link> - Tic Tac Toe game with
        useState and canvas
      </li>
      <li>
        <Link to="/themes">Themes</Link> - Theme switcher with basic contexts
      </li>
      <li>
        <Link to="/advancedThemes">Advanced Themes</Link> - Theme switcher with
        advanced contexts
      </li>
      <li>
        <Link to="/orderTape">Order Tape</Link> - Fast Food Order Tape using
        useMemo
      </li>
    </ProjectList>
  </>
);

const ProjectList = styled.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`;

const Heading = styled.h1`
  display: flex;
  justify-content: space-between;
`;

const HookHolster = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;

const Hook = styled.img`
  height: 43px;
  width: auto;
  animation: wobble 5s infinite;
  transform: rotate(-45deg);
  transform-origin: bottom right;

  @keyframes wobble {
    from {
      transform: rotate(-45deg);
    }

    50% {
      transform: rotate(90deg);
    }

    to {
      transform: rotate(-45deg);
    }
  }
`;
