import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Title from '../Title';
import topics from '../../utils/topics';

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
                        {topics.map(topic => (
                            <View key={topic.id} 
                                style={{
                                    paddingVertical: 10,
                                    marginBottom: 10
                                }}
                            >
                                <TouchableOpacity onPress={() => navigation.navigate('Principal', {tab: topic.id})}>
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