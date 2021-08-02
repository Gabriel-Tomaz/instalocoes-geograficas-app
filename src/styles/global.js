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
        justifyContent: 'center'
      },
}))`
    width: 100%;
    height: 100%;
    margin-top: 70px;
    background-color: #FFF;
`; 