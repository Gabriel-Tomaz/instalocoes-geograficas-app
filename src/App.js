/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import Routes from "./routes";
import { RoutesProvider } from "./Context/RoutesContext";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RoutesProvider>
      <Routes />
    </RoutesProvider>
  );
};

export default App;
