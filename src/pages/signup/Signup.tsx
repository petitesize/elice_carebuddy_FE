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
  border: 1px solid var(--color-grey-2);
  padding: 50px;
  text-align: center;
`

const Text = styled.div`
  margin: 20px 0 10px 0;
  font-weight: bold;
  font-size: var(--font-size-md-1); //16
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
