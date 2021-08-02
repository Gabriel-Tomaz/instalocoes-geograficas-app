import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/core';

import {NavBody, NavContent, MenuButton} from './style';
import Colors from '../../styles/colors';

const Navbar = () => {
    const navigation = useNavigation();

    return(
        <NavBody>
            <NavContent>
                <MenuButton onPress={() => {navigation.openDrawer()}}>
                    <Icon name="navicon" size={40} color={Colors.secondaryColor}></Icon>
                </MenuButton>
            </NavContent>
        </NavBody>
    );
}

export default Navbar;