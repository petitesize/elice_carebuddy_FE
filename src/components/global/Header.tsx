import React from 'react';
import styled from 'styled-components';
import imgSrc from './../../assets/carebuddyLogo.png'
import search from './../../assets/searchIcon.png'
import user from './../../assets/userIcon.png'
import alert from './../../assets/alertIcon.png'
import { Link } from 'react-router-dom'; 

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
  font-weight: bold;
`;

const MenuBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 60px;
`;

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0 10px 0 10px;
`;

const Login = styled.a`
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: end;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1024px;
  height: auto;
`
const Category = styled.a`
  & a {
    text-decoration: none;
    color: inherit;
  }
`
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <MenuBox>
          <Link to="/"><Logo src={imgSrc} /></Link>
          <Category><Link to="/community">커뮤니티</Link></Category>
          <Category><Link to="/diary">건강관리</Link></Category>
          <Category><Link to="/">정보</Link></Category>
          <Icon src={search} />
          <Category><Link to="/signup"><Login>로그인</Login></Link></Category>
          <Link to="/mypage"><Icon src={user} /></Link>
          <Icon src={alert} />
        </MenuBox>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
