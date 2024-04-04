import { createGlobalStyle } from 'styled-components';
import React from 'react';
import styled from 'styled-components';
import reset from 'styled-reset';

// 전역 공통 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  font-family: 'Pretendard-Regular';
  color:#343434;
  }

  html, #root {
    width: 100%;
    height: auto;
  }
`;

const Global: React.FC = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default Global;
