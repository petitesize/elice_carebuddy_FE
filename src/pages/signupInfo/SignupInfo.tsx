import React, { useEffect } from 'react';
import SectionBox from './../../components/signupInfo/SectionBox';
import { useSetRecoilState } from 'recoil';
import { userToken } from '../../recoil/selectors';

const SignupInfo: React.FC = () => {
  // 여기서 토큰 있으면 my api 호출해서 유저 정보 받아오기

  return (
    <>
      <SectionBox />
    </>
  );
};

export default SignupInfo;
