import { createGlobalStyle } from 'styled-components';
import React from 'react';
import styled from 'styled-components';
import reset from 'styled-reset';

// 전역 공통 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}

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
  }
`

const Global: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    </>
  );
};

export default Global;