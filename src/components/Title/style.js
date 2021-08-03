/* eslint-disable prettier/prettier */
import styled from "styled-components";
import Colors from "../../styles/colors";

export const TitleContent = styled.View`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`;

export const TitleText = styled.Text`
    color: ${Colors.blackColor};
    font-size: 24px;
    font-family: 'NotoSans-Bold';
    justify-content: center;
    align-items: center;
`;

export const Underline = styled.View`
    width: auto;
    height: 5px;
    background-color: ${Colors.secondaryColor};
`;