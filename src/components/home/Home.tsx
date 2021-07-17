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
        <Link to="/colors">Colors</Link> - App using GraphQL Colors API
      </li>
      <li>
        <Link to="/states">The United States</Link> - App using custom
        useAsyncHook around the United States API.
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
