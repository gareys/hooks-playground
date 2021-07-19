import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Colors } from './Colors';

const colorClient = new ApolloClient({
  uri: 'https://api.sampleapis.com/css-color-names/graphql',
  cache: new InMemoryCache(),
});

export const ColorsScene = () => (
  <ApolloProvider client={colorClient}>
    <Colors />
  </ApolloProvider>
);
