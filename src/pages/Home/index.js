import React from 'react';
import {Text} from 'react-native';

import {Main} from '../../styles/global';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <Main>
            <Navbar />
            <Text>Home</Text>
        </Main>
    );
};
 
export default Home;