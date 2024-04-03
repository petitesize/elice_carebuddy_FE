import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 TopBar 스타일 정의
const TopBarContainer = styled.div`
  background-color: #575757;
  color: #fff;
  padding: 10px 20px;
`;

const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <h1>My Top Bar</h1>
    </TopBarContainer>
  );
};

export default TopBar;
