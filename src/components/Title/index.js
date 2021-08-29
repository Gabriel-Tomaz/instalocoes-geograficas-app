/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text} from 'react-native';

import Colors from '../../styles/colors';

const Title = ({title}) => {
    return(
        <View>
            <Text 
                style={{
                    color: Colors.blackColor,
                    fontFamily: 'NotoSans-Bold',
                    fontSize: 24,
                }}
            >
                {title}
            </Text>
            <View style={{height: 5, backgroundColor: Colors.secondaryColor}} />
        </View>
    );
}

export default Title;