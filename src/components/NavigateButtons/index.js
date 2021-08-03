import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ButtonsArea, ButtonsContent,Button,Label,BackButton,BackLabel} from './style';
import Colors from '../../styles/colors';

const NavigateButtons = ({next}) => {

    const navigation = useNavigation();

    return(
        <ButtonsArea>
            <ButtonsContent>
                <BackButton onPress={() => {navigation.goBack()}}>
                    <Icon name="keyboard-arrow-left" size={30} color={Colors.primaryColor}/> 
                    <BackLabel>Voltar</BackLabel>
                </BackButton>

                <Button onPress={() => {navigation.navigate(next)}}>
                    <Label>Continuar</Label>
                    <Icon name="keyboard-arrow-right" size={30} color='#FFF'/> 
                </Button>
            </ButtonsContent>
        </ButtonsArea>
    );
};

export default NavigateButtons;