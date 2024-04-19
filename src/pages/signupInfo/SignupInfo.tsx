import React, { useEffect } from 'react';
import SectionBox from './../../components/signupInfo/SectionBox';
import { useSetRecoilState } from 'recoil';
import { userToken } from '../../recoil/selectors';

const SignupInfo: React.FC = () => {
  // 여기서 토큰 있으면 my api 호출해서 유저 정보 받아오기
  const setUser = useSetRecoilState(userToken);

  useEffect(() => {
    //check if "access_token" exists in Cookie and set it to Recoil
    const token = document.cookie
      .split(';')
      .find((cookie) => cookie.trim().startsWith('accessToken='))
      ?.split('=')[1];

    if (token) {
      setUser(token);
    }
  }, []);
  return (
    <>
      <SectionBox />
    </>
  );
};

export default SignupInfo;
