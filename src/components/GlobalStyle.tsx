import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Pretendard-Regular';
  }
  
  html, #root {
    margin: 0;
    padding: 0;
    background-color: grey;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .main {
    margin: 0 auto;
    padding: 0;
    width: 70%;
    height: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;