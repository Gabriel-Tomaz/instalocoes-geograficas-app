/* eslint-disable prettier/prettier */
import styled from "styled-components";
import Colors from "../../styles/colors";

export const TitleContent = styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const TitleText = styled.Text`
    font-weight: bold;
    color: ${Colors.blackColor};
    font-size: 24px;
`;

export const Underline = styled.View`
    width: auto;
    height: 5px;
    background-color: ${Colors.secondaryColor};
`;