import React from 'react';
import {Text} from 'react-native';

import {Main, MainScrollView, TextContainer,TextArea} from '../../styles/global';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import NavigateButtons from '../../components/NavigateButtons';

const Home = () => {
    return (
        <Main>
            <Navbar />
            <MainScrollView>
                <TextContainer>
                    <Title title="Início"/>
                    <TextArea>
                        Este aplicativo tem como objetivo divulgar os resultados da pesquisa Instalações
                        “Geográficas e Educação de Surdos: uma contribuição ao ensino e a
                        aprendizagem da Geografia na Escola de Ensino Fundamental Centro Educacional de Mauriti – CEM, no município de Mauriti/CE”, realizado no Programa de Mestrado Profissional em Educação da Universidade Regional do
                        Cariri- URCA.
                    </TextArea>
                </TextContainer>
            </MainScrollView>
            <NavigateButtons />
        </Main>
    );
};
 
export default Home;