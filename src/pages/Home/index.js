import React from 'react';
import {Text} from 'react-native';

import {Main, MainScrollView} from '../../styles/global';
import Navbar from '../../components/Navbar';
import NavigateButtons from '../../components/NavigateButtons';

const Home = () => {
    return (
        <Main>
            <Navbar />
            <MainScrollView>
                <Text>Home</Text>
            </MainScrollView>
            <NavigateButtons />
        </Main>
    );
};
 
export default Home;