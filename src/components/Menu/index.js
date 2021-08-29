import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Title from '../Title';
import texts from '../../utils/texts';

const Menu = ({navigation}) => {
    return(
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
           <View style={{padding: 20}}>
                <View style={{alignSelf: 'flex-start'}}>
                    <Title  title="Menu"/>
                </View>
                    <View style={{marginTop: 20}}>
                        <View 
                                style={{
                                    marginBottom: 10
                                }}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('Sumário')}>
                                <Text 
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'NotoSerif-Bold'
                                    }}
                                >
                                    Sumário
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {texts.map((topic, index) => (
                            <View key={index} 
                                style={{
                                    paddingVertical: 10,
                                    marginBottom: 10
                                }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Principal', {tab: index+1})}>
                                    <Text 
                                        style={{
                                            fontSize: 18,
                                            fontFamily: 'NotoSerif-Bold'
                                        }}
                                    >
                                        {topic.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
        </View>
    );
}

export default Menu;