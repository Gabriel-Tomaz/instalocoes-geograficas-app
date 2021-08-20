/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {Main, MainScrollView, TextContainer,TextArea,SubTitle} from '../../styles/global';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import NavigateButtons from '../../components/NavigateButtons';
import mountItems from '../../utils/mountItems';
import ModalComponent from '../../components/ModalComponent';

import {Card,CardImage,ImageContent,CardTitle} from './style';


const Mount = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentID,setCurrentID] = useState(0);

    return (
        <>
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

                        {mountItems.map(item => (
                            <Card 
                                key={item.id} 
                                style={{marginBottom: item.id == mountItems.length ? 120 : 20}} 
                                onPress={() => {
                                    setCurrentID(item.id-1);
                                    setIsVisible(!isVisible);
                                }}
                            >
                                <ImageContent>
                                    <CardImage source={item.imgGray}/>
                                </ImageContent>
                                <CardTitle>{item.title}</CardTitle>
                            </Card>
                        ))}

                    </TextContainer>
                </MainScrollView>
                <NavigateButtons />
            </Main>

            <ModalComponent 
                visible={isVisible} 
                hideModal={() => setIsVisible(false)}
                id={currentID}
            />
        </>
    );
};
 
export default Mount;