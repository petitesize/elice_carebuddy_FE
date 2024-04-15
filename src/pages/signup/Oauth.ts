import axios from 'axios';
import { API_URL } from '../../constants/constants';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios, { AxiosResponse } from 'axios';

{/*interface Tokens {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

const getTokens = async (): Promise<Tokens> => {
  const url = 'https://kauth.kakao.com/oauth/token';

  const data = {
    grant_type: 'authorization_code',
    client_id: 'fc0445196ca1bc948515866bb1fba56e',
    redirect_uri: 'http://localhost:5173/signup-info/auth/kakao/callback',
    code: 'SVBIOeu9awf-r8nF2gsOfB0sVSjVVyV6htmIVnJjnelaXb0ROL6wfNxJBdHW4BCjG5etiQopb1UAAAF3YfB5Zw',
  };

  const response: AxiosResponse<Tokens> = await axios.post(url, data);

  // 응답 데이터 반환
  return response.data;
};

// 토큰 가져오기
const tokens: Tokens = await getTokens();

// 결과 출력
console.log(tokens);
*/}