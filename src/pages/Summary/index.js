/* eslint-disable prettier/prettier */
import React from 'react';
import { useContext } from 'react';
import {useNavigation} from '@react-navigation/core';

import { PageContext } from '../../Context/PageContext';

import Navbar from '../../components/Navbar';
import {Main, MainScrollView} from '../../styles/global';
import {SummaryItem,SummaryTitle,SummaryAbstract} from './style';
import topics from '../../utils/topics';

const Summary = () => {
    const navigation = useNavigation('');
    const {setPreviousPage} = useContext(PageContext);

    function goTo(page){
        setPreviousPage('Sumário');
        navigation.navigate(page);
    }

    return (
        <Main>
            <Navbar />
            <MainScrollView style={{marginTop: 70}}>
                {topics.map(topic => (
                    <SummaryItem key={topic.id} onPress={() => {goTo(topic.title)}}>
                        <SummaryTitle>{topic.title}</SummaryTitle>
                        <SummaryAbstract>{topic.abstract}</SummaryAbstract>
                </SummaryItem>
                ))}
            </MainScrollView>
        </Main>
    );
};
 
export default Summary;