import { Color } from "chalk";
import styled from "styled-components";

import Colors from '../../styles/colors';

export const ButtonsArea = styled.View`
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const ButtonsContent = styled.View`
    width: 90%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 45%;
    height: 55px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primaryColor} ;
`;

export const Label = styled.Text`
    font-family: 'NotoSans-Bold';
    text-align: center;
    color: #FFF;
    font-size: 20px;  
`;

export const BackButton = styled(Button)`
    background-color: #FFF;
    border: solid 1px ${Colors.primaryColor};
`;

export const BackLabel = styled(Label)`
    color: ${Colors.primaryColor};
`;

