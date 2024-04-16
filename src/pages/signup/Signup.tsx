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

const REST_API_KEY = "fc0445196ca1bc948515866bb1fba56e";
const REDIRECT_URI = "http://localhost:5173/signup-info/auth/kakao/callback";
const kakaoToken = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginPage: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoToken;
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
          <StyledButton onClick={handleKakaoLogin} />
        </LoginBox>
      </Main>
    </>
  );
};

export default LoginPage;
