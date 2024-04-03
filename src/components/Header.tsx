import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 header 스타일 정의
const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  margin: 0;
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>header</h1>
    </HeaderContainer>
  );
};

export default Header;
