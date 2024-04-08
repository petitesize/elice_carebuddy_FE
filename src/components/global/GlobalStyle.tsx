import { createGlobalStyle } from 'styled-components';
import React from 'react';
import reset from 'styled-reset';

// 전역 공통 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --font-size-sm-1: 0.75rem; // 12
    --font-size-ft-1: 0.875rem; // 14

    --font-size-md-1: 1rem; // 16
    --font-size-md-2: 1.125rem; // 18

    --font-size-hd-1: 1.25rem; // 20
    --font-size-hd-2: 1.375rem; // 22

    --font-size-lg-1: 1.625rem; // 26
    --font-size-lg-2: 2rem; // 32
    
    /* h1,h2: bold, h3~h5: semibold, h6: medium 
      p: regular and bold
      buttons and labels: semibold */
    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-medium: 500; 
    --font-weight-regular: 400; 

    --color-green-main: #6D987A;
    --color-green-sub-1: #98B99C;
    --color-green-sub-2: #E0EAE1;
    --color-beige-main: #EEEDE5;
    --color-beige-sub: #F7F6F2;
    --color-red-main: #E13C45;
    --color-black-main: #343434;
    --color-grey-1: #7D7D7D;
    --color-grey-2: #CECECE;
    --color-white: #ffffff;
    --color-black: #343434;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  html, body, #root {
    width: 100%;
    height: auto;
    font-family: 'Pretendard-Regular', sans-serif;
    margin: 0;
    padding: 0;
    color:#343434;
  }
`;

const Global: React.FC = () => {
  return (
      <GlobalStyle />
  );
};

export default Global;
