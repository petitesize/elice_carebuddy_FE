import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 TopBar 스타일 정의
const TopBarContainer = styled.div`
  background-color: #EEEDE5;
  color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 80px;
  font-size: 32px;
`;
const Container = styled.div`
  width: 70%;
`

const Category = styled.div`
  font-size: 16px;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`

const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
    <Container>
      <Category>건강 관리</Category>
      <Title>건강 다이어리</Title>
    </Container>
    </TopBarContainer>
  );
};

export default TopBar;
