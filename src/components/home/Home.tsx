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
    </ProjectList>
  </>
);

const ProjectList = styled.ul`
  list-style: none;
`;
