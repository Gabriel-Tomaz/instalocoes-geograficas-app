/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/core';

import {NavBody, NavContent, MenuButton} from './style';
import Colors from '../../styles/colors';

const Navbar = () => {

    return(
        <NavBody>
            <NavContent>
                <MenuButton>
                    <Icon name="navicon" size={35} color={Colors.secondaryColor}></Icon>
                </MenuButton>
            </NavContent>
        </NavBody>
    );
}

export default Navbar;