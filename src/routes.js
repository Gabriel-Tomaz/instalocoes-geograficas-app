/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerMenu from './components/DrawerMenu';
import Colors from './styles/colors';

import Home from './pages/Home';
import Summary from './pages/Summary';


export const Routes = () => {
    const Drawer = createDrawerNavigator();

    const DrawerItemsSettings ={
        headerShown: false,
        drawerItemStyle:{
            width: 85 + '%',
            backfaceVisibility: 'hidden',
        },
        drawerLabelStyle: {
            color: `${Colors.blackColor}`,
            fontSize: 18,
            fontFamily: 'NotoSerif-Bold',
        },
        drawerInactiveTintColor: Colors.grayColor,
        drawerActiveBackgroundColor: Colors.grayColor,
    };

    return(
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={DrawerItemsSettings}
                drawerContent={DrawerMenu}
            >
                <Drawer.Screen name="Sumário" component={Summary} />
                <Drawer.Screen name="Início" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Routes;