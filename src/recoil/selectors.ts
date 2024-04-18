import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectorFamily } from 'recoil';
import axios from 'axios';
import { API_URL } from '../constants/constants';

interface User {
  // 구현되면 정의
}

// 외부 API에서 유저 정보를 가져오는 함수
const getUserData = async (userIdOrToken: string): Promise<User | null> => {
  try {
    // 유저 정보를 가져오는 API 요청
    const response = await axios.get<User>(`${API_URL}users/${userIdOrToken}`);
    return response.data.message; // 적절한 데이터 필드를 반환해야 합니다.
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// selectorFamily를 사용하여 비동기로 유저 정보를 가져오는 선택자 정의
export const userQuery = selectorFamily<User | null, string>({
  key: 'userQuery',
  get: (userIdOrToken) => async () => {
    try {
      // 외부 API에서 유저 정보를 가져옴
      const userData = await getUserData(userIdOrToken);
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
});
// {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`, // 토큰 포함
//     },
//   }
