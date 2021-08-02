/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';

import Title from '../Title';
import {DrawerBody} from './style';

const DrawerMenu = (props) => {
    return(
        <DrawerBody>
            <Title title="Menu" />
            <DrawerItemList {...props}/>
        </DrawerBody>
    );
}

export default DrawerMenu;