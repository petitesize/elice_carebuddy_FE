import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userQuery } from '../../recoil/selectors.ts';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from './../../constants/constants';
import styled from 'styled-components';
import imgSrc from './../../assets/carebuddyLogo.png';
import userIcon from './../../assets/userIcon.png';
import alert from './../../assets/alertIcon.png';

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

const MenuBox = styled.p`
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
  }
  > div {
    margin-right: 96px;
  }
  > div:first-child {
    margin-right: auto;
  }
  > div:last-child {
    margin-right: 0;
  }
`;

const HeaderDiv = styled.div``;

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
  margin-top: 2px;
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
  > span {
    font-size: 10px;
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 10px;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  transition: all 0.5s;
  font-size: 12px;
`;

const LogoutButton = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  transition: all 0.5s;
  font-size: 12px;
`;

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [groups, setGroups] = useState<Group[]>([]);
  // const [user, setUser] = useRecoilState(userState);
  const [user] = useRecoilState(userQuery);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const userGroups = user?.categoryId;
  console.log(userGroups);

  interface Mapping {
    [key: number]: string;
  }

  const mapping: Mapping = {
    0: '강아지',
    1: '고양이',
  };

  const dropdownItems = userGroups
    ? userGroups.map((group) => {
        // name이 0이면 "강아지", name이 1이면 "고양이"로 변경하여 반환
        const name = mapping[group.name]; // 여기서 에러 왜 나는지..? Category가 어디에 있는거지?
        return { ...group, name };
      })
    : [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        const groupData = response.data.message;
        setGroups('헤더', groupData);
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, []);

  // links 배열 정의
  const links = [
    { path: '/', label: '로고', icon: imgSrc, className: '' },
    { label: '커뮤니티', icon: null, className: 'community' },
    { label: '건강관리', icon: null, className: 'health' },
    { label: '정보', icon: null, className: 'info' },
    { path: '/mypage', label: '', icon: userIcon, className: 'mypage' },
    // { path: '/', label: '', icon: alert },
  ];

  console.log('Document cookies:', document.cookie);

  const deleteCookie = () => {
    console.log(document.cookie);
    document.cookie =
      'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    window.location.reload();
  };

  useEffect(() => {
    // 페이지가 로드될 때 쿠키를 확인하여 로그인 여부를 결정
    const checkLoggedInStatus = () => {
      const accessTokenExists = document.cookie
        .split(';')
        .some((cookie) => cookie.trim().startsWith('accessToken='));
      setIsLoggedIn(accessTokenExists);
    };

    checkLoggedInStatus();
  }, []); // 페이지 로드 시 한 번만 실행되도록 빈 배열을 전달

  const redirectNotLogin = () => {
    if (!isLoggedIn) {
      window.alert('로그인이 필요한 기능입니다.');
      navigate('/');
      return;
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <LoginButtonContainer>
          {isLoggedIn ? (
            <LogoutButton onClick={deleteCookie}>로그아웃</LogoutButton>
          ) : (
            <LoginButton to="/signup">로그인</LoginButton>
          )}
        </LoginButtonContainer>
        <MenuBox>
          {links.map((link, index) => (
            <Category
              key={index}
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {link.path ? (
                <Link
                  to={link.path}
                  onClick={() => {
                    setActiveMenu(null);
                    if (link.path === '/mypage') {
                      redirectNotLogin();
                    }
                  }}
                >
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
                <HeaderDiv>
                  <span className={link.className}>{link.label}</span>
                  {link.icon && <Icon src={link.icon} />}
                </HeaderDiv>
              )}
              {/* 건강 다이어리 서브메뉴 표시 */}
              {activeMenu === index && link.label === '건강관리' && (
                <SubMenu>
                  <SubMenuItem>
                    <SubMenuLink onClick={redirectNotLogin} to="/diary">
                      건강 다이어리
                    </SubMenuLink>
                  </SubMenuItem>
                </SubMenu>
              )}
              {/* 커뮤니티 서브메뉴 표시 */}
              {activeMenu === index && link.label === '커뮤니티' && (
                <SubMenu className="community">
                  {dropdownItems.map((group, idx) => (
                    <SubMenuItem key={idx}>
                      <SubMenuLink to={`/group/${group._id}`}>
                        {group.group} <span>{group.name}</span>
                      </SubMenuLink>
                    </SubMenuItem>
                  ))}
                  <SubMenuItem>
                    <SubMenuLink to="/group">전체 그룹</SubMenuLink>
                  </SubMenuItem>
                </SubMenu>
              )}
              {/* 정보 서브메뉴 표시 */}
              {activeMenu === index && link.label === '정보' && (
                <SubMenu className="info">
                  <SubMenuItem>
                    <SubMenuLink to="/hospital-info">병원 정보</SubMenuLink>
                  </SubMenuItem>
                  <SubMenuItem>
                    <SubMenuLink to="/pharmacy-info">약국 정보</SubMenuLink>
                  </SubMenuItem>
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
