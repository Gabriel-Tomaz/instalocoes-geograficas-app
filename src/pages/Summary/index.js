/* eslint-disable prettier/prettier */
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import texts from '../../utils/texts';
import Header from '../../components/Header';
import Colors from '../../styles/colors';

const Summary = () => {
    const navigation = useNavigation('');
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header />
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', backgroundColor: '#FFF'}}>
                {texts.map((topic, index) => (
                    <TouchableOpacity 
                        key={index} 
                        onPress={() => navigation.navigate('Principal', {tab: topic.id})}
                        style={{
                            backgroundColor: Colors.grayColor,
                            padding: 20,
                            marginHorizontal: 20,
                            marginVertical: 15,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            elevation: 2,
                        }}
                    >
                        <Text 
                            style={{
                                fontFamily: 'NotoSans-Bold',
                                fontSize: 18,
                                marginBottom: 15,
                                color: Colors.blackColor,
                            }}
                        >
                            {topic.title}
                        </Text>
                        <Text 
                             style={{
                                fontFamily: 'NotoSans-Regular',
                                fontSize: 16,
                                color: Colors.blackColor,
                            }}
                            numberOfLines={3}
                        >
                            {topic.text}

                            {topic.topics ? (
                               <View>
                                   { topic.topics.map((item,index) => (
                                        <Text
                                            key={index}
                                            style={{
                                                fontFamily: 'NotoSans-Regular',
                                                fontSize: 16,
                                                color: Colors.blackColor,
                                            }}
                                        >
                                            {item.subTitle}
                                        </Text>
                                    ))}
                               </View>
                            ):null}

                            {topic.authors ? (
                               <View>
                                   { topic.authors.map((item,index) => (
                                        <Text
                                            key={index}
                                            style={{
                                                fontFamily: 'NotoSans-Regular',
                                                fontSize: 16,
                                                color: Colors.blackColor,
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                    ))}
                               </View>
                            ):null}
                        </Text>
                    </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    );
};
 
export default Summary;