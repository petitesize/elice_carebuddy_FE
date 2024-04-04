import React from 'react';
import KakaoLogin from 'react-kakao-login';

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
      <div className='main'>
        <div className='loginBox'>
          <h2>카카오 소셜 로그인</h2>
          <KakaoLogin
            token="fc0445196ca1bc948515866bb1fba56e"
            onSuccess={responseKaKao}
            onFail={responseFail}
            getProfile="true"
            buttonText="카카오로 로그인하기"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
