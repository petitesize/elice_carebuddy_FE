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
  height: 40px;
  font-size: 32px;
`;
const Container = styled.div`
  width: 1024px;
`

const Category = styled.div`
  font-size: 14px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
`

const TopBar: React.FC<{ routePath: string }> = ({ routePath }) => {

interface DummyData {
  name: number;
  group: string;
  menu: string[];
}

const DummyData = {
  name: 0,
  group: '눈 / 피부 / 귀',
  menu: ['커뮤니티', '건강 관리', '정보', '마이페이지', '로그인 / 회원가입']
}

interface MenuDummyData {
  name: string;
}

const MenuDummyData: MenuDummyData = {
  name: routePath === '/mypage' ? '마이페이지' : '',
};

  return (
    <TopBarContainer>
    <Container>
      <Category>{MenuDummyData.name}</Category>
      <Title >{DummyData.group}</Title>
    </Container>
    </TopBarContainer>
  );
};

export default TopBar;
