import React from 'react';
import {View, Image,Text} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';

import moutItems from '../../utils/mountItems';

import {Close, Title} from './style';

const ModalComponent = ({id, visible, hideModal}) => {

    return(
        <Modal 
            isVisible={visible} 
            transparent={true} 
            animationIn="fadeInLeft"
            animationOut="fadeOutRight"
        >
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{padding: 16, backgroundColor: '#FFF'}}>
                    <Close onPress={hideModal}>
                        <Icon name="close" color="#000" size={28}/>
                    </Close>

                    <View>
                        <Title >{moutItems[id].title}</Title>

                        <Image style={{ maxWidth: '100%',height: 240}} source={moutItems[id].img}/>

                        <Text style={{
                            fontFamily:'NotoSans-Bold', 
                            fontSize: 16, 
                            marginBottom: 15,
                            marginTop: 15,
                        }}>
                            Ficha Técnica
                        </Text>

                        <Text style={{
                            fontFamily:'NotoSans-Bold', 
                            fontSize: 14, 
                            marginBottom: 5,
            
                        }}>
                            Objetos representados e sua representação:
                        </Text>
                        
                        {moutItems[id].objects.map(item => (
                            <View style={{
                                flexDirection: 'row', 
                                flexWrap: 'wrap', 
                                marginBottom: 5, 
                            }}>
                                <Text style={{fontFamily:'NotoSans-Bold', fontSize: 14}}>{item.item_name}: </Text>
                                <Text style={{fontFamily:'NotoSans-Regular', fontSize: 14}}>{item.representation}</Text>
                            </View>       
                        ))}
                    </View>
                        
                    
                </View>
            </View>
        </Modal>
    );
}

export default ModalComponent;