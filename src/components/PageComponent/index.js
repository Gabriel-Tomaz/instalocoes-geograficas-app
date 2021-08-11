import React from 'react';

import {Main, MainScrollView, TextContainer,TextArea} from '../../styles/global';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import NavigateButtons from '../../components/NavigateButtons';

const PageComponent = ({title,text,nextPage}) => {
    return (
        <Main>
            <MainScrollView overScrollMode="always">
                <TextContainer>
                    <Title title={title}/>
                    <TextArea>{text}</TextArea>
                </TextContainer>
            </MainScrollView>
            <NavigateButtons next={nextPage}/>
        </Main>
    );
};
 
export default PageComponent;