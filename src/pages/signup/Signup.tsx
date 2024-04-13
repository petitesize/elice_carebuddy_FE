import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import LogoImg from '../../assets/carebuddyLogo.png';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import ButtonImg from '../../assets/kakao_login_medium_narrow.png'

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
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 15px; */
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

const StyledButton = styled.button`
  background-image: url(${ButtonImg}); // 이미지 경로를 버튼의 배경 이미지로 설정
  background-size: cover; // 이미지를 버튼의 크기에 맞게 조정
  width: 200px; // 버튼의 너비 설정
  height: 50px; // 버튼의 높이 설정
  border: none; // 버튼의 테두리 제거
  cursor: pointer; // 커서를 포인터로 변경하여 클릭 가능함을 나타냄
  border-radius: 5px;
  margin-top: 10px;
`;

const LoginPage: React.FC = () => {

  let REST_API_KEY = "fc0445196ca1bc948515866bb1fba56e";
  let REDIRECT_URI = "http://localhost:3001/auth/kakao/callback";
  const kakaoToken = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoToken;
  }
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
