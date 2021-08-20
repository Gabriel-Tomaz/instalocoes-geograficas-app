import styled from 'styled-components/native';

import Colors from '../../styles/colors';

export const Card = styled.TouchableOpacity`
    width: 95%;
    background-color: ${Colors.grayColor};
    height: 245px;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    elevation: 2;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ImageContent = styled.View`
    width: 90%;
    height: 150px;
    justify-content: center;
    align-items: center;
`;

export const CardImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: 'NotoSans-Bold';
    width: 90%;
    margin-top: 20px;
`;