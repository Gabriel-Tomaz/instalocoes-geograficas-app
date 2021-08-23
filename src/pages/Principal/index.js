import React, {useState} from 'react';
import { View, ScrollView, TouchableOpacity,Text, Image } from 'react-native';
import {Tab, Icon, TabView} from 'react-native-elements';

import ModalComponent from '../../components/ModalComponent';
import Title from '../../components/Title';
import Colors from '../../styles/colors';
import texts from '../../utils/texts';

const Principal = () => {
    const [index,setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [currentID,setCurrentID] = useState(0);

    const nextTab = () => {
        if(index < texts.length){
            setIndex(index+1);
        }
    };
    const previousTab = () => {
        if(index !== 0){
            setIndex(index-1);
        }
    };

    const renderNextButton = () => {
        return(
            <TouchableOpacity
                onPress={nextTab}
                style={{
                    backgroundColor: Colors.primaryColor,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: Colors.primaryColor,
                    height: 55,
                    marginLeft: 10,
                }}    
            >
                <Text
                    style={{
                        fontSize: 24,
                        color: '#FFF',
                        fontFamily: 'NotoSans-Bold',
                    }}
                >Continuar</Text>
                <Icon name="chevron-right" type="material" size={30} color="#FFF"/>
            </TouchableOpacity>
        );
    }

    const renderPreviousButton = () => {
        return(
            <TouchableOpacity
                onPress={previousTab}
                style={{
                    backgroundColor: '#FFF',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: Colors.primaryColor,
                    height: 55,
                    marginLeft: 10,
                }}    
            >
                 <Icon name="chevron-left" type="material" size={30} color={Colors.primaryColor}/>
                <Text
                    style={{
                        fontSize: 24,
                        color: Colors.primaryColor,
                        fontFamily: 'NotoSans-Bold',
                    }}
                >Voltar</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <TabView value={index}>
            {texts.map(item => (
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                        <TabView.Item key={item.id}>
                            <View style={{flex: 1, padding: 16}}>
                                <View style={{alignSelf: 'flex-start'}}>
                                    <Title title={item.title}/>
                                </View>
                                <Text style={{
                                    fontFamily: 'NotoSerif-Regular', 
                                    fontSize: 18, textAlign: 'left', 
                                    marginTop: 15}}
                                >
                                    {item.text}
                                </Text>
                                {item.topics ? (
                                    item.topics.map(topic => (
                                       <>
                                            <Text 
                                                style={{
                                                    fontFamily: 'NotoSans-Bold',
                                                    fontSize: 18,
                                                  
                                                }}
                                            >
                                                {topic.subTitle}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily: 'NotoSerif-Regular', 
                                                    fontSize: 18, 
                                                    textAlign: 'left', 
                                                    marginTop: 15
                                                }}
                                            >
                                                {topic.topicText}
                                            </Text>
                                       </>
                                    ))
                                ): null}
                                {item.objects ? (
                                    item.objects.map(object => (
                                       <TouchableOpacity 
                                            style={{
                                                backgroundColor: Colors.grayColor,
                                                padding: 16,
                                                marginTop: 20,
                                                borderColor: '#ddd',
                                                shadowColor: '#000',
                                                shadowOpacity: 0.1,
                                                elevation: 2,
                                                borderBottomWidth: 0,
                                            }}

                                            onPress={() => {
                                                setCurrentID(object.id-1);
                                                setIsVisible(!isVisible);
                                            }}
                                       >
                                           <View style={{marginBottom: 15}}>
                                               <Image source={object.imgGray} style={{ maxWidth: '100%',height: 156}}/>
                                           </View>
                                           <Text style={{
                                               fontFamily: 'NotoSans-Bold',
                                               fontSize: 16,
                                           }}>{object.title}</Text>
                                       </TouchableOpacity>
                                    ))
                                ) : null}
                            </View>
                        </TabView.Item>
                </ScrollView>
             ))}
            </TabView>
            <View style={{padding: 16}}>
                <Tab value={index} disableIndicator>
                    <Tab.Item 
                        TouchableComponent={renderPreviousButton}
                        containerStyle={{
                            backgroundColor: 'transparent'
                        }}
                    />
                    <Tab.Item 
                        TouchableComponent={renderNextButton}
                        containerStyle={{
                            backgroundColor: 'transparent'
                        }}
                    />
                </Tab>
            </View>

            <ModalComponent 
                visible={isVisible} 
                hideModal={() => setIsVisible(false)}
                id={currentID}
            />

        </View>
    );
};
 
export default Principal;