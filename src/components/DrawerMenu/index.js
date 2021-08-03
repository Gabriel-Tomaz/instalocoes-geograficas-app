/* eslint-disable prettier/prettier */
import React from 'react';
import {DrawerItemList} from '@react-navigation/drawer';

import Title from '../Title';
import {DrawerBody,DrawerHeader} from './style';

const DrawerMenu = (props) => {
    return(
        <DrawerBody>
            <DrawerHeader>
                <Title title="Menu" />
            </DrawerHeader>
            <DrawerItemList {...props}/>
        </DrawerBody>
    );
}

export default DrawerMenu;