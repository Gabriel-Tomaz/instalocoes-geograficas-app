import React from 'react';
import {Text} from 'react-native';

import {Main} from '../../styles/global';
import Navbar from '../../components/Navbar';

const Summary = () => {
    return (
        <Main>
            <Navbar />
            <Text>Summary</Text>
        </Main>
    );
};
 
export default Summary;