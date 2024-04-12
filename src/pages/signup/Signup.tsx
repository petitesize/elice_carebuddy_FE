import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import LogoImg from '../../assets/carebuddyLogo.png'

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const LoginBox = styled.div`
  background-color: var(--color-white);
  border-radius: 7px;
  text-align: center;
  padding: 80px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`
const Content = styled.div`
  line-height: 25px;
  margin: 30px 0 40px 0;
  font-size: var(--font-size-md-1); //16
`
const Text = styled.div`
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: var(--font-size-md-2); //18
`
const Logo = styled.img`
  width: 150px;
`
const LoginPage: React.FC = () => {
  const responseKaKao = (response: any) => {
    console.log(response);
    // 카카오로부터 받은 응답을 처리하는 로직을 작성합니다.
    // 사용자 정보를 받아올 수 있습니다.
    const kakaoId = response.profile.id;
    const kakaoName = response.profile.properties.nickname;
    console.log('Kakao ID:', kakaoId);
    console.log('Kakao Name:', kakaoName);
  };

  const responseFail = (error: any) => {
    console.error(error);
  };

  return (
    <>
      <Main>
        <LoginBox>
          <Logo src={LogoImg} />
          <Content>케어버디와 함께<br />
          사랑하는 나의 반려동물과<br />
          건강하고 행복한 시간을 보내세요</Content>
          <Text>간편 로그인 / 회원가입</Text>
            <KakaoLogin
              token="fc0445196ca1bc948515866bb1fba56e"
              onSuccess={responseKaKao}
              onFail={responseFail}
              getProfile="true"
              buttonText="카카오로 로그인하기"
            />
        </LoginBox>
      </Main>
    </>
  );
};

export default LoginPage;
