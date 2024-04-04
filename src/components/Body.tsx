import React from 'react';
import styled from 'styled-components';
import LoginPage from '../pages/login/Login';

const Main = styled.div`
    margin: 0 auto;
    width: 70%;
    height: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
`;

const Body: React.FC = () => {
  return (
    <Main>
      <LoginPage />
    </Main>
  );
};

export default Body;