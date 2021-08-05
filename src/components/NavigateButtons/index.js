/* eslint-disable prettier/prettier */
import React from 'react';
import { useContext} from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PageContext } from '../../Context/PageContext';

import {ButtonsArea, ButtonsContent,Button,Label,BackButton,BackLabel} from './style';
import Colors from '../../styles/colors';

const NavigateButtons = ({next}) => {

    const navigation = useNavigation();
    const route = useRoute();

    const {previousPage,setPreviousPage} = useContext(PageContext);

    function nextPage(nextPage, previous){
        navigation.navigate(nextPage);
        setPreviousPage(previous);
    }

    return (
        <ButtonsArea>
            <ButtonsContent>
                <BackButton onPress={() => {navigation.navigate(route.name === 'Início' ? 'Sumário' : previousPage)}}>
                    <Icon name="keyboard-arrow-left" size={30} color={Colors.primaryColor}/>
                    <BackLabel>Voltar</BackLabel>
                </BackButton>

                <Button onPress={() => {nextPage(next, route.name);}}>
                    <Label>Continuar</Label>
                    <Icon name="keyboard-arrow-right" size={30} color= "#FFF" />
                </Button>
            </ButtonsContent>
        </ButtonsArea>
    );
};

export default NavigateButtons;