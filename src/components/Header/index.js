import React from 'react';
import { Icon} from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import Colors from '../../styles/colors';

const Header = () => {
    const navigation = useNavigation();

    return(
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View 
                style={{ 
                    flex: 1, 
                    padding: 16, 
                    paddingHorizontal: 20, 
                    backgroundColor: '#FFF'
                }}
            >
                <TouchableOpacity 
                    style={{
                        alignSelf: 'flex-start'
                    }} 
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Icon name="menu" type="material" color={Colors.secondaryColor} size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;