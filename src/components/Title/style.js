/* eslint-disable prettier/prettier */
import styled from "styled-components";
import Colors from "../../styles/colors";

export const TitleContent = styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-bottom: 5px;
`;

export const TitleText = styled.Text`
    color: ${Colors.blackColor};
    font-size: 24px;
    font-family: 'NotoSansJP-Bold';
    justify-content: center;
    align-items: center;
    height: 50px;
`;

export const Underline = styled.View`
    width: auto;
    height: 5px;
    background-color: ${Colors.secondaryColor};
`;