import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectorFamily } from 'recoil';
import axios from 'axios';
import { API_URL } from '../constants/constants';

interface User {
  // 구현되면 정의
}

// 외부 API에서 유저 정보를 가져오는 함수
const getUserData = async (userIdOrToken: string): Promise<User | null> => {
  const cookieExists = document.cookie
    .split(';')
    .some((cookie) => cookie.trim().startsWith('accessToken='));
  console.log('Document cookies:', document.cookie);

  if (cookieExists) {
    try {
      console.log(`${API_URL}users/me`);
      // 유저 정보를 가져오는 API 요청
      // const response = await axios.get<User>(`${API_URL}users/${userIdOrToken}`);
      const response = await axios.get<User>(`${API_URL}users/me`, {
        withCredentials: true, // 이 옵션을 통해 axios가 쿠키를 요청에 포함시킵니다.
      });
      console.log(response.data.user);
      if (response.status === 200) {
        console.log(response.data);
        return response.data.user;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  } else return null;
};

// selectorFamily를 사용하여 비동기로 유저 정보를 가져오는 선택자 정의
export const userQuery = selectorFamily<User | null, string>({
  key: 'userQuery',
  get: (userIdOrToken) => async () => {
    try {
      // 외부 API에서 유저 정보를 가져옴
      const userData = await getUserData(userIdOrToken);
      if (userData === null) {
        return null;
      } else {
        return userData;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
});
