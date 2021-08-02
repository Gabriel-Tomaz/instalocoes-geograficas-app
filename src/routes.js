import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';

export const Routes = () => {
    const Drawer = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Drawer.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Routes;