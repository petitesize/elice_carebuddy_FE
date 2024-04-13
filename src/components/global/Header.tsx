import React, { useState } from 'react';
import styled from 'styled-components';
import imgSrc from './../../assets/carebuddyLogo.png';
import user from './../../assets/userIcon.png';
import alert from './../../assets/alertIcon.png';
import { Link } from 'react-router-dom';

// 링크 및 아이콘에 대한 배열 생성
const links = [
  { path: '/', label: '로고', icon: imgSrc },
  { label: '커뮤니티', icon: null, subMenu: ['커뮤니티1', '커뮤니티2'] },
  { label: '건강관리', icon: null, subMenu: ['건강 다이어리'] },
  { label: '정보', icon: null, subMenu: ['병원 검색', '약국 검색'] },
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

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1024px;
  height: auto;
  position: relative;
  z-index: 1; /* 헤더 내부 요소 위에 위치하도록 설정 */
`;

const MenuBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; /* 하위 드롭다운 위치 지정을 위해 상대 위치로 설정 */
  z-index: 1; /* 하위 드롭다운이 상위 요소 위에 위치하도록 설정 */
  font-weight: var(--font-weight-bold);

  & a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: var(--font-weight-bold);
    transition: all 0.5s;
    font-size: 14px;
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

const Category = styled.div`
  position: relative;
  display: inline-block;
  text-align: center; 
  margin: 0 20px;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  background-color: white;
  border: 1px solid #cecece;
  z-index: 100;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubMenuItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #cecece;
  
  &:last-child {
    border-bottom: none; /* 마지막 아이템의 하단 테두리 제거 */
  }
`;

const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    color: var(--color-green-main); /* 드롭다운 메뉴 아이템 hover 시 효과 */
  }
`;

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <HeaderContainer>
      <Container>
        <MenuBox>
          {links.map((link, index) => (
            <Category key={index} onMouseEnter={() => setActiveMenu(index)} onMouseLeave={() => setActiveMenu(null)}>
              {link.path ? ( // 링크가 있을 때만 Link 컴포넌트 사용
                <Link to={link.path} onClick={() => setActiveMenu(null)}>
                  {link.label === '로고' ? (
                    <Logo src={link.icon} />
                  ) : (
                    <>
                      <span>{link.label}</span>
                      {link.icon && <Icon src={link.icon} />}
                    </>
                  )}
                </Link>
              ) : (
                <>
                  <span>{link.label}</span>
                  {link.icon && <Icon src={link.icon} />}
                </>
              )}
              {activeMenu === index && link.subMenu && (
                <SubMenu>
                  {link.subMenu.map((item, idx) => (
                    <SubMenuItem key={idx}>
                      <SubMenuLink to={link.label === '커뮤니티' && item === '커뮤니티1' ? '/community' : link.label === '건강관리' && item === '건강 다이어리' ? '/diary' :link.label === '정보' && item === '병원 검색' ? '/hospital-info' : `/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</SubMenuLink>
                    </SubMenuItem>
                  ))}
                </SubMenu>
              )}
            </Category>
          ))}
        </MenuBox>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
