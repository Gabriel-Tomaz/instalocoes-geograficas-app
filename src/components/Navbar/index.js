import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {NavBody, NavContent, MenuButton} from './style';
import Colors from '../../styles/colors';

const Navbar = () => {
    return(
    <NavBody>
        <NavContent>
            <MenuButton>
                <Icon name="menu" size={30} color={Colors.secondaryColor}></Icon>
            </MenuButton>
        </NavContent>
    </NavBody>
    );
}

export default Navbar;