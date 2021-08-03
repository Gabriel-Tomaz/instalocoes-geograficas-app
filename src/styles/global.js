import styled from "styled-components";

export const Main = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
`;

export const MainScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1, 
        justifyContent: 'center',
      },
}))`
    width: 100%;
    height: 100%;
    background-color: #FFF;
`;

export const TextContainer = styled.View`
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const TextArea = styled.Text`
    width: 100%;
    font-family: 'NotoSerif-Regular';
    font-size: 18px;
    margin-top: 10px;
`;