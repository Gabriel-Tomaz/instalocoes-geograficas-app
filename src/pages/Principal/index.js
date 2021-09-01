import React, {useState, useEffect} from 'react';
import { View, ScrollView, TouchableOpacity,Text, Image, Linking } from 'react-native';
import {Tab, Icon, TabView} from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';


import ModalComponent from '../../components/ModalComponent';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Colors from '../../styles/colors';
import texts from '../../utils/texts';

const Principal = ({navigation, route}) => {
    const [index,setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [currentID,setCurrentID] = useState(0);
    const {tab} = route.params;
    
    useEffect(() => {
        if(tab){
            setIndex(tab-1);
        }
    }, [tab])

    const nextTab = () => {
        if(index < texts.length -1){
            setIndex(index+1);
        }
    };
    const previousTab = () => {
        if(index !== 0){
            setIndex(index-1);
        }
        if(index === 0){
            navigation.goBack();
        }
    };

    const onSwipeRight = () => {
        if(index !== 0){
            setIndex(index-1);
        }
        if(index === 0){
            navigation.goBack();
        }
    }

    const onSwipeLeft = () => {
        if(index < texts.length -1){
            setIndex(index+1);
        }
    }

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
            <Header />
            <GestureRecognizer
                style={{flex: 1}}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            >
                <TabView value={index}>
                {texts.map((item, index) => (
                    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}  key={index}>
                            <TabView.Item  key={item.id}>
                                <View style={{ padding: 20}}>
                                    <View style={{alignSelf: 'flex-start'}}>
                                        <Title title={item.title}/>
                                    </View>
                                    <Text 
                                        style={{
                                            fontFamily: 'NotoSerif-Regular', 
                                            fontSize: 18, 
                                            textAlign: 'left',
                                            marginTop: item.topics || item.authors ? -5 : 20
                                        }}
                                    >
                                        {item.text}
                                    </Text>
                                    {item.topics ? (
                                        item.topics.map((topic, index) => (
                                        <View key={index}>
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
                                        </View>
                                        ))
                                    ): null}
                                    {item.objects ? (
                                        item.objects.map((object, index) => (
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
                                                    setIsVisible(true);
                                                }}

                                                key={index}
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

                                    {item.authors ? (
                                        item.authors.map(author => (
                                            <View key={author.id} style={{marginBottom: 20}}>
                                                <Text style={{fontFamily: 'NotoSerif-Bold', fontSize: 18}}>{author.name}</Text>
                                                <Text style={{fontFamily: 'NotoSerif-Regular', fontSize: 18}}>{author.abstract}</Text>
                                                <TouchableOpacity onPress={() => Linking.openURL(`${author.link}`)} style={{marginTop: 15}}> 
                                                    <Text 
                                                        style={{
                                                            fontFamily: 'NotoSerif-Regular',
                                                            fontSize: 18,
                                                            textDecorationLine: 'underline',
                                                            color: Colors.secondaryColor,
                                                        }}
                                                    >
                                                        {author.link}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        ))
                                    ) : null}
                                </View>
                            </TabView.Item>
                    </ScrollView>
                ))}
                </TabView>
            </GestureRecognizer>
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