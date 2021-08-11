/* eslint-disable prettier/prettier */
import React from 'react';

import {Main, MainScrollView, TextContainer,TextArea,SubTitle} from '../../styles/global';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import NavigateButtons from '../../components/NavigateButtons';

const MethodologicalSteps = () => {
    return (
        <Main>
            <MainScrollView  overScrollMode="always">
                <TextContainer style={{marginTop: 70}}>
                    <Title title={'Passos metodológicos'}/>

                    <SubTitle>Planejamento e Conteúdo</SubTitle>
                    <TextArea>
                        De posse do currículo e do conteúdo, começamos a idealizar o trabalhar
                        para materializar esse conhecimento numa Instalação Geográfica.
                    </TextArea>
                    <TextArea>
                        Assim nos colocamos a pensar e escolher os procedimentos didáticos
                        para auxiliar na mediação do conteúdo, de modo que proporcionasse a
                        compreensão pelos alunos.
                    </TextArea>

                    <SubTitle>Procedimento e Ideia</SubTitle>
                    <TextArea>
                            No decorrer da nossa explanação do conteúdo (consumo e meio
                        ambiente) propomos aos alunos a realização de uma Instalação
                        Geográfica como forma de avaliação.
                    </TextArea>

                    <SubTitle>Ponto Crucial e Teia de Ideias</SubTitle>
                    <TextArea>
                        Lançamos uma atividade de pesquisa aos alunos sobre o conteúdo que
                        estava sendo trabalhado. A pesquisa contribuiu para o aprofundamento
                        do conteúdo trabalhado, bem como estimularia a curiosidade e a
                        criatividade dos alunos. Fazendo que todo esse processo estivesse
                        alinhado às experiências cotidianas dos alunos, pois é daí que sairiam os
                        materiais que iriam compor a instalação.
                    </TextArea>
                    <TextArea style={{marginBottom: 120}}>
                        Instigamos o debate com os alunos, aonde foram discutidas as ideias
                        suscitadas com a pesquisa, bem como, a escolha dos objetos para
                        materializar a instalação.
                    </TextArea>
                </TextContainer>
            </MainScrollView>
            <NavigateButtons />
        </Main>
    );
};
 
export default MethodologicalSteps;