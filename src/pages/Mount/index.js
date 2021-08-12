/* eslint-disable prettier/prettier */
import React from 'react';

import {Main, MainScrollView, TextContainer,TextArea,SubTitle} from '../../styles/global';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import NavigateButtons from '../../components/NavigateButtons';
import cardsThumbs from '../../utils/cardsThumbs';

import {Card,CardImage,ImageContent,CardTitle} from './style';

//Thumbnails dos cards 


const Mount = () => {
    return (
        <Main>
            <MainScrollView  overScrollMode="always">
                <TextContainer style={{marginTop: 70}}>
                    <Title title={'Passos metodológicos'}/>

                    <SubTitle>Montagem</SubTitle>
                    <TextArea>
                        Após o debate dos textos e definição dos objetos para materializar a
                        instalação, nos preparamos para o dia da montagem e exposição da
                        instalação (que aconteceu de forma virtual). Neste momento solicitamos
                        aos alunos que refizessem o texto para ser entregue ao final de todo o
                        processo.
                    </TextArea>

                    {cardsThumbs.map(item => (
                        <Card key={item.id} style={{marginBottom: item.id == cardsThumbs.length ? 120 : 20}}>
                            <ImageContent>
                                <CardImage source={item.img}/>
                            </ImageContent>
                            <CardTitle>{item.title}</CardTitle>
                        </Card>
                    ))}

                </TextContainer>
            </MainScrollView>
            <NavigateButtons />
        </Main>
    );
};
 
export default Mount;