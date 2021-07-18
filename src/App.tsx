import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from './components/colors/Colors';
import { Home } from './components/home/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { States } from './components/states/States';
import { BackLink } from './components/shared/BackLink';
import { Countries } from './components/countries/Countries';

const colorClient = new ApolloClient({
  uri: 'https://api.sampleapis.com/css-color-names/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <AppContainer>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            {` | `}
            <BackLink />
          </nav>
        </div>
        <Switch>
          <Route path="/colors">
            <ApolloProvider client={colorClient}>
              <Colors />
            </ApolloProvider>
          </Route>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/states">
            <States />
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
