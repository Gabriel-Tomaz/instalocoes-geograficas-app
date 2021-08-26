/* eslint-disable prettier/prettier */
import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {Main, MainScrollView} from '../../styles/global';
import {SummaryItem,SummaryTitle,SummaryAbstract} from './style';
import topics from '../../utils/topics';
import Header from '../../components/Header';

const Summary = () => {
    const navigation = useNavigation('');
    return (
        <>
            <Header />
            <Main>
                <MainScrollView style={{marginTop: 10}}>
                    {topics.map(topic => (
                        <SummaryItem key={topic.id} onPress={() => {navigation.navigate(topic.title)}}>
                            <SummaryTitle>{topic.title}</SummaryTitle>
                            <SummaryAbstract>{topic.abstract}</SummaryAbstract>
                    </SummaryItem>
                    ))}
                </MainScrollView>
            </Main>
        </>
    );
};
 
export default Summary;