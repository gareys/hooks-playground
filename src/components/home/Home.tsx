import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Home = () => (
  <>
    <h1>Hooks Playground</h1>
    <hr />
    <h2>Projects</h2>
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
        <Link to="/tictactoe">TicTacToe</Link> - TicTacToe game leveraging many
        hooks
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
