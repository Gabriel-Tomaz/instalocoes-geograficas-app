/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DrawerMenu from './components/DrawerMenu';
import Colors from './styles/colors';

import Home from './pages/Home';
import Summary from './pages/Summary';
import GeographicFacilities from './pages/GeographicFacilities';
import MethodologicalSteps from './pages/MethodologicalSteps';
import Mount from './pages/Mount';


export const Routes = () => {
    const Stack = createStackNavigator();
    // const Drawer = createDrawerNavigator();

    // const DrawerItemsSettings ={
    //     headerShown: false,
    //     drawerItemStyle:{
    //         width: 85 + '%',
    //         backfaceVisibility: 'hidden',
    //         height: 50,
    //         marginBottom: 0,
    //     },
    //     drawerLabelStyle: {
    //         color: `${Colors.blackColor}`,
    //         fontSize: 18,
    //         fontFamily: 'NotoSerif-Bold',
    //     },
    //     drawerInactiveTintColor: Colors.grayColor,
    //     drawerActiveBackgroundColor: Colors.grayColor,
    // };

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Sumário" component={Summary} />
                <Stack.Screen name="Início" component={Home} />
                <Stack.Screen name="Instalações Geográficas" component={GeographicFacilities} />
                <Stack.Screen name="Passos metodológicos" component={MethodologicalSteps} />
                <Stack.Screen name="Passos metodológicos - Montagem" component={Mount} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;