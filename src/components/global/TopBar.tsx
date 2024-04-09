import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// styled-components를 사용하여 TopBar 스타일 정의
const TopBarContainer = styled.div`
  background-color: #EEEDE5;
  color: #343434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 32px;
`;
const Container = styled.div`
  width: 1024px;
`

const Category = styled.div`
  font-size: 14px;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding-top: 5px;
`

interface DummyData {
  name: number;
  group: string;
  menu: string[];
}

const DummyData: DummyData = {
  name: 0,
  group: '눈 / 피부 / 귀',
  menu: ['carebuddy', '커뮤니티', '건강관리',
    '정보', '마이페이지', '로그인 / 회원가입',
    ]
}

const TopBar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  let menuIndex = 0; // 초기값으로 첫 번째 메뉴인 'carebuddy'를 선택합니다.
  let menuName = ''; // menuName의 초기값은 빈 문자열입니다.

 // pathname에 따라 menuIndex와 menuName을 설정합니다.
 DummyData.menu.forEach((item, index) => {
  if (pathname === '/' && index === 0) {
    menuIndex = index;
    menuName = '반려동물 건강 서비스';
  } else if (pathname === '/community' && item === '커뮤니티') {
    menuIndex = index;
    menuName = '커뮤니티';
  } else if (pathname === '/mypage' && item === '마이페이지') {
    menuIndex = index;
    menuName = '회원 정보 관리';
  } else if (pathname === '/userpage' && item === 'carebuddy') {
    menuIndex = index;
    menuName = '유저 페이지';
  } else if (pathname === '/diary' && item === '건강관리') {
    menuIndex = index;
    menuName = '건강 다이어리';
  } else if (pathname === '/group' && item === '커뮤니티') {
    menuIndex = index;
    menuName = item;
  } else if (pathname === '/signup' && item === 'carebuddy') {
    menuIndex = index;
    menuName = '로그인 / 회원가입';
  }
});

  return (
    <TopBarContainer>
      <Container>
        <Category>{DummyData.menu[menuIndex]}</Category>
        <Title>{menuName}</Title>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;
