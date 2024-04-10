import React from 'react';
import styled from 'styled-components';
import imgSrc from './../../assets/carebuddyLogo.png';
import search from './../../assets/searchIcon.png';
import user from './../../assets/userIcon.png';
import alert from './../../assets/alertIcon.png';
import { Link } from 'react-router-dom';

// 링크 및 아이콘에 대한 배열 생성
const links = [
  { path: '/', label: '로고', icon: imgSrc },
  { path: '/community', label: '커뮤니티', icon: null },
  { path: '/diary', label: '건강관리', icon: null },
  { path: '/hospital-info', label: '정보', icon: null },
  { path: '/signup', label: '로그인', icon: null },
  { path: '/mypage', label: '', icon: user },
  { path: '/', label: '', icon: alert },
];

// styled-components를 사용하여 header 스타일 정의
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: white;
  display: flex;
  align-items: center;
`;

const MenuBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: var(--font-weight-bold);
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 60px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1024px;
  height: auto;
`;

const Category = styled.a`
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <MenuBox>
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.label === '로고' ? (
                <Logo src={link.icon} />
              ) : (
                <>
                  <Category>{link.label}</Category>
                  {link.icon && <Icon src={link.icon} />}
                </>
              )}
            </Link>
          ))}
        </MenuBox>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
