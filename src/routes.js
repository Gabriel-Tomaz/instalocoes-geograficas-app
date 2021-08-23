/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Summary from './pages/Summary';
import Principal from './pages/Principal';

export const Routes = () => {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Principal" component={Principal} />
                <Stack.Screen name="Sumário" component={Summary} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;