/* eslint-disable prettier/prettier */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Summary from "./pages/Summary";
import Principal from "./pages/Principal";

import Menu from "./components/Menu";

export const Routes = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <Menu {...props} />}
      >
        <Drawer.Screen name="Sumário" component={Summary} />
        <Drawer.Screen name="Principal" component={Principal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
