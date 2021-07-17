import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from './components/colors/Colors';
import { Home } from './components/home/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const colorClient = new ApolloClient({
  uri: 'https://api.sampleapis.com/css-color-names/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/colors">
            <ApolloProvider client={colorClient}>
              <Colors />
            </ApolloProvider>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;
