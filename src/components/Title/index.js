/* eslint-disable prettier/prettier */
import React from 'react';

import {TitleContent, TitleText, Underline} from './style';

const Title = ({title}) => {
    return(
        <TitleContent>
            <TitleText>
                {title}
                </TitleText>
            <Underline />
        </TitleContent>
    );
}

export default Title;