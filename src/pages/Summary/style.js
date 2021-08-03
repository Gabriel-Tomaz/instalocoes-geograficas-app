/* eslint-disable prettier/prettier */
import styled from "styled-components";

import Colors from '../../styles/colors';

export const SummaryItem = styled.TouchableOpacity`
    width: 90%;
    background-color: ${Colors.grayColor};
    height: 150px;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    elevation: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const SummaryTitle = styled.Text`
    font-family: 'NotoSans-Bold';
    color: ${Colors.blackColor};
    width: 90%;
    font-size: 18px;
    margin-bottom: 15px;
`;

export const SummaryAbstract = styled.Text`
    font-family: 'NotoSans-Regular';
    width: 90%;
    font-size: 16px;
`