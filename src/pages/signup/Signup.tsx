import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import LogoImg from '../../assets/carebuddyLogo.png';
import ButtonImg from '../../assets/kakao_login_medium_narrow.png';

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const LoginBox = styled.div`
  background-color: var(--color-white);
  border-radius: 7px;
  text-align: center;
  padding: 80px;
`;

const Content = styled.div`
  line-height: 25px;
  margin: 30px 0 40px 0;
  font-size: var(--font-size-md-1);
`;

const Text = styled.div`
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: var(--font-size-md-2);
`;

const Logo = styled.img`
  width: 150px;
`;

const StyledButton = styled.button`
  background-image: url(${ButtonImg});
  background-size: cover;
  width: 200px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

interface KakaoOpt {
  clientId: string;
  redirectUri: string;
  clientSecret: string;
}

const kakaoOpt: KakaoOpt = {
  clientId: import.meta.env.VITE_KAKAO_REST_API_KEY || '',
  redirectUri: import.meta.env.VITE_REDIRECT_URI || '',
  clientSecret: import.meta.env.VITE_SECRET_KEY || ''
};
const LoginPage: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href=`https://kauth.kakao.com/oauth/authorize?client_id=${kakaoOpt.clientId}&redirect_uri=${kakaoOpt.redirectUri}&response_type=code`
  };
  const test = async () => {
    window.location.href='http://kdt-sw-8-team01.elicecoding.com/auth/kakao'
  };

    
  return (
    <>
      <Main>
        <LoginBox>
          <Logo src={LogoImg} />
          <Content>
            케어버디와 함께
            <br />
            사랑하는 나의 반려동물과
            <br />
            건강하고 행복한 시간을 보내세요
          </Content>
          <Text>간편 로그인 / 회원가입</Text>
          <StyledButton onClick={test} />
        </LoginBox>
      </Main>
    </>
  );
};

export default LoginPage;
