/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <View style={styles.Main}>
        <Text>Instalações Geográficas</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
