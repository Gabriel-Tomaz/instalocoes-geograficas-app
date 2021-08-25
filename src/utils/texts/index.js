const texts = [
    {
   
        title: 'Início',
        text: `Este aplicativo tem como objetivo divulgar os resultados da pesquisa Instalações “Geográficas e Educação de Surdos: uma contribuição ao ensino e a aprendizagem da Geografia na Escola de Ensino Fundamental Centro Educacional de Mauriti – CEM, no município de Mauriti/CE”, realizado no Programa de Mestrado Profissional em Educação da Universidade Regional do Cariri- URCA.`
    },
    {
        id: 2,
        title: 'Instalações Geográficas',
        text: `Esta metodologia foi consolidada pelo professor Emerson Ribeiro em 2014 a partir de sua tese de doutoramento intitulada: “Processos Criativos em Geografia: Metodologia para a Sala de Aula em Instalações Geográficas”. O mesmo define da seguinte forma esta metodologia “[...] uma forma de representação de um conteúdo geográfico pesquisado e trabalhado criativamente com signos e símbolos aplicado sobre materiais produzidos ou não pelo homem. Essa instalação pode ser montada na escola/universidade ou para além de seus muros atingindo uma dimensão social” (RIBEIRO, 2014, p. 19).`
    },
    {
        id: 3,
        title: 'Passos metodológicos',
        topics: [
            {
                id: 1,
                subTitle: 'Planejamento e Conteúdo',
                topicText: `De posse do currículo e do conteúdo, começamos a idealizar o trabalhar para materializar esse conhecimento numa Instalação Geográfica.${'\n\n'}Assim nos colocamos a pensar e escolher os procedimentos didáticos para auxiliar na mediação do conteúdo, de modo que proporcionasse a compreensão pelos alunos.`
            },
            {
                id: 2,
                subTitle: 'Procedimento e Ideia',
                topicText: 'No decorrer da nossa explanação do conteúdo (consumo e meio ambiente) propomos aos alunos a realização de uma Instalação Geográfica como forma de avaliação.',
            },
            {
                id: 3,
                subTitle: 'Ponto Crucial e Teia de Ideias',
                topicText: `Lançamos uma atividade de pesquisa aos alunos sobre o conteúdo que estava sendo trabalhado. A pesquisa contribuiu para o aprofundamento do conteúdo trabalhado, bem como estimularia a curiosidade e a criatividade dos alunos. Fazendo que todo esse processo estivesse alinhado às experiências cotidianas dos alunos, pois é daí que sairiam os materiais que iriam compor a instalação.${'\n\n'}Instigamos o debate com os alunos, aonde foram discutidas as ideias suscitadas com a pesquisa, bem como, a escolha dos objetos para materializar a instalação.`
            },
        ],
    },
    {
        id: 4,
        title: 'Passos metodológicos',
        topics: [
           {
                id: 4,
                subTitle: 'Montagem',
                topicText: 'Após o debate dos textos e definição dos objetos para materializar a instalação, nos preparamos para o dia da montagem e exposição da instalação (que aconteceu de forma virtual). Neste momento solicitamos aos alunos que refizessem o texto para ser entregue ao final de todo o processo.'
           }
        ],
        objects: [
            {
                id:1,
                title: 'Instalação geográfica sobre os móveis',
                objects: [
                    {
                        item_name: 'Pegador de gaveta',
                        representation: 'móveis.'
                    },
                    {
                        item_name: 'Nota de vinte reais',
                        representation: 'extinção de espécies de animais e plantas.'
                    },
                    {
                        item_name: 'Serra de unha',
                        representation: 'desmatamento ilegal.'
                    },
                    {
                        item_name: 'Cachina de palitos de dentes',
                        representation: 'extração excessiva.'
                    }
        
                ],
                img: require('../../assets/img/image1.jpg'),
                imgGray: require('../../assets/img/tumb1.png')
            },
            
            {
                id:2,
                title: 'Instalação geográfica sobre a cana-de-açúcar',
                objects: [
                    {
                        item_name: 'Rapadura',
                        representation: 'cana-de-açúcar.'
                    },
                    {
                        item_name: 'Cinzas',
                        representation: 'queimada da palha da cana-de-açúcar.'
                    },
                    {
                        item_name: 'Casacas de ovos',
                        representation: 'perda da biodiversidade e do ecossistema.'
                    },
        
                ],
                img: require('../../assets/img/image2.jpg'),
                imgGray: require('../../assets/img/tumb2.png')
            },
        
            {
                id:3,
                title: 'Instalação geográfica sobre o café',
                objects: [
                    {
                        item_name: 'Imagem de Santa Clara',
                        representation: 'Café.'
                    },
                    {
                        item_name: 'Casca de madeira',
                        representation: 'desmatamento (diminuição da área florestal).'
                    },
                    {
                        item_name: 'Isqueiro',
                        representation: 'queimadas.'
                    },
                    {
                        item_name: 'Cacos de telhas',
                        representation: 'erosão do solo.'
                    },
        
                ],
                img: require('../../assets/img/image3.jpg'),
                imgGray: require('../../assets/img/tumb3.png')
            },
        
            {
                id:4,
                title: 'Instalação geográfica sobre o milho',
                objects: [
                    {
                        item_name: 'Flocos de milho',
                        representation: 'milho.'
                    },
                    {
                        item_name: 'Serra de serra cano',
                        representation: 'desmatamento.'
                    },
                    {
                        item_name: 'Pilão',
                        representation: 'compactação e impermeabilização dos solos pelo uso intensivo de máquinas agrícolas.'
                    },
                    {
                        item_name: 'Sonrisal',
                        representation: 'erosão do solo.'
                    },
        
                ],
                img: require('../../assets/img/image4.jpg'),
                imgGray: require('../../assets/img/tumb4.png')
            },
        
            {
                id:5,
                title: 'Instalação geográfica sobre a carne bovina.',
                objects: [
                    {
                        item_name: 'Chifre',
                        representation: 'carne bovina.'
                    },
                    {
                        item_name: 'Naftalina',
                        representation: 'emissões de gases de efeito estufa (GEEs), produzidos pela atividade e pela ruminação e fezes dos animais.'
                    },
                    {
                        item_name: 'PilãoCaixa de fósforos',
                        representation: 'desmatamento e queimadas para pastagens.'
                    },
        
                ],
                img: require('../../assets/img/image5.jpg'),
                imgGray: require('../../assets/img/tumb5.png')
            },
        
            {
                id:6,
                title: 'Instalação geográfica sobre a carne de frango.',
                objects: [
                    {
                        item_name: 'Caldo Tablete Knorr',
                        representation: 'carne de frango.'
                    },
                    {
                        item_name: 'Torneira',
                        representation: 'desperdício de água no manejo no interior das granjas e em outros setores de produção e consumo.'
                    },
                    {
                        item_name: 'Detergentes',
                        representation: 'as emissões de poeiras, odores, amônia e os gases prejudiciais ao meio ambiente.'
                    },
                    {
                        item_name: 'Sal',
                        representation: 'o excesso de minerais depositados nos solos.'
                    },
                ],
                img: require('../../assets/img/image6.jpg'),
                imgGray: require('../../assets/img/tumb6.png')
            },
        
            {
                id:7,
                title: 'Instalação geográfica sobre a carne suína.',
                objects: [
                    {
                        item_name: 'Jujuba',
                        representation: 'carne suína.'
                    },
                    {
                        item_name: 'Vidro de dipirona',
                        representation: 'contaminação das águas superficiais e subterrâneas.'
                    },
                    {
                        item_name: 'Fermento biológico',
                        representation: 'contaminação do solo por disposição excessiva de dejetos.'
                    },
                    {
                        item_name: 'Mascara',
                        representation: 'poluição do ar (emissões de odores).'
                    },
                ],
                img: require('../../assets/img/image7.jpg'),
                imgGray: require('../../assets/img/tumb7.png')
            },
        ]
    },
    {
        id: 5,
        title: 'Passos metodológicos',
        topics: [
            {
                id: 5,
                subTitle: 'Desmonte',
                topicText: 'Após a apresentação das instalações, os alunos entregaram o segundo texto solicitado. Nesses textos, os alunos expuseram suas reflexões sobre o percurso de desenvolvimento da instalação, destacando os pontos positivos e negativos. Assim, poderíamos avaliar se o conteúdo e os objetivos de aprendizagem foram atingidos pelos alunos.'
            }
        ]
    },
    {
        id: 6,
        title: 'Metodologia e resultados',
        text: `Evidenciamos que em todo o desenvolvimento da metodologia o aluno Surdo e os demais alunos participaram de forma significativa, corroborando para um ensino criativo, crítico e colaborativo. A partir dos procedimentos metodológicos, sobretudo dos os elementos de representação da metodologia, (signos e símbolos), foi possível perceber a contribuição destes para a formação de conceitos pelo aluno Surdo valorizando assim as experiências visuais do mesmo e dos ouvintes.${'\n\n'}Neste processo dialético proposto pela a metodologia todos os alunos, exercitaram a criticidade e a criatividade, diante do conteúdo trabalhado. As Instalações Geográficas a partir da tríade: reflexão, criação e materialização, contribuiu para tornar o conhecimento dinâmico, valorizando a diversidade entre os sujeitos e suas experiências visuais, fazendo cada um perceber-se como agente modelador do espaço e do seu próprio conhecimento.${'\n\n'}Consideramos, portanto, que as Instalações Geográficas ao valorizar as experiências visuais do aluno Surdo e dos demais alunos, sendo pautada, sobretudo pelo viés artístico, contribui para mudanças positivas no ensino e na aprendizagem dos conteúdos geográficos, fomentando desta forma nos alunos um pensamento emancipatório, bem como, mudanças nas práticas pedagógicas.`
    },
    {
        id: 7,
        title: 'Autores',
        authors: [
            {
                id: 1,
                name: 'Gabriel Emanuel Leite de Lima',
                abstract:'Professor da rede estadual de ensino do Estado do Ceará, SEDUC.',
                link: 'http://lattes.cnpq.br/3970076445418510'
            },
            {
                id: 2,
                name: 'Dr. Emerson Ribeiro',
                abstract: 'Professor Adjunto do Departamento de Geociências e do Mestrado Profissional em Educação da Universidade Regional do Cariri - URCA/CE e Professor do quadro permanente do Programa de Pós-graduação em Geografia da Universidade Federal da Paraíba – UFPB/PB.',
                link: 'http://lattes.cnpq.br/6808110433438335'
            }
        ]
    }
];

export default texts;