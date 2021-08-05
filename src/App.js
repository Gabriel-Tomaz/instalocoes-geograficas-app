/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Routes from './routes';
import { PageProvider } from './Context/PageContext';

const App = () => {
  return (
    <PageProvider>
      <Routes />
    </PageProvider>
  );
};

export default App;
