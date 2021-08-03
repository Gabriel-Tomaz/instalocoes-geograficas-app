import React from 'react';

import PageComponent from '../../components/PageComponent';

const Home = () => {
    return (
        <PageComponent 
            title="Início"
            text="
                Este aplicativo tem como objetivo divulgar os resultados da pesquisa Instalações
                “Geográficas e Educação de Surdos: uma contribuição ao ensino e a
                aprendizagem da Geografia na Escola de Ensino Fundamental Centro Educacional de Mauriti – CEM, no município de Mauriti/CE”, realizado no Programa de Mestrado Profissional em Educação da Universidade Regional do
                Cariri- URCA."
            nextPage="Instalações Geográficas"
        />
    );
};
 
export default Home;