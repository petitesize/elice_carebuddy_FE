import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import LogoImg from '../../assets/carebuddyLogo.png';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const Content = styled.div`
  line-height: 25px;
  margin: 30px 0 40px 0;
  font-size: var(--font-size-md-1); //16
`;

const Text = styled.div`
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: var(--font-size-md-2); //18
`;

const Logo = styled.img`
  width: 150px;
`;

const LoginPage: React.FC = () => {

    let REST_API_KEY = "6bc949b130be05177810686309537eb7";
    let REDIRECT_URI = "http://localhost:3001/auth/kakao/callback";
    const kakaoToken = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
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
            <a href={kakaoToken}>카카오 로그인</a>
        </LoginBox>
      </Main>
    </>
  );
};

export default LoginPage;
