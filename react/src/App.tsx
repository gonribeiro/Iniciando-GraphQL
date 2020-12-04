import React from 'react';

import { ApolloProvider } from '@apollo/client';

import Routes from './routes';

import client from './services/api';

const App: React.FC = () => (
  <ApolloProvider client={client}>
      <Routes />
  </ApolloProvider>
);

export default App;
