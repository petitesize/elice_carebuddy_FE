// import useGetUserApi from '../hooks/useGetUserAPI';

// const UserAPI = () => {
//   useGetUserApi();
//   return null;
// };

// export default UserAPI;

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userQuery } from '../recoil/selectors';
import { userState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

const UserAPI = () => {
  const [, setUser] = useRecoilState(userState);

  // userQuery 셀렉터의 값을 읽어옴
  const userData = useRecoilValue(userQuery('661a0e5febec873b54de2ad1'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUser(userData);
        console.log('user 조회 성공하면 여기 값 이건 UserAPI:', userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userData, setUser]); // userData가 변경될 때마다 useEffect가 다시 실행되도록

  return null; // 렌더링 할 내용이 없으므로 null을 반환
};

export default UserAPI;
