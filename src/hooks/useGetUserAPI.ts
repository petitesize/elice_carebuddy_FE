import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { userState } from '../recoil/atoms';
import { API_URL } from '../constants/constants';

/* 
  [FE] 카카오 로그인 > 카카오가 토큰을 줌 > 이 토큰을 서버한테 줌 > 
  [BE] 서버가 JWT토큰을 줌 > 
  [FE] 이걸 로컬스토리지에 저장함 > API 요청할떄 이 토큰을 헤더에 담아서 준다 > 
  [BE] 토큰 인증 여부를 보내준다 >
  [FE] 이 토큰 인증 여부로 페이지 접근 권한을 제어한다 
*/

//  (e.g. GetToken) 로컬스토리지 토큰값 먼저 검사해야함

// 1. 로컬스토리지의 JWT 토큰을 헤더에 담아서 GET API 호출 => 여기서 이 함수를 호출해주는지 마는지를 결정?
//      => User GET API에서 200 같은 응답이 왔을 경우에만 이 함수를 실행해줘야 한다?
// 2. 토큰에서?.. 유저아이디로 회원정보를 가져와서 API GET을 해준다?
// 3. 다른 유저 > ID로 조회
// 4. 사용자는 /me 사용 : 우리는 회원 정보 조회가 users/:id 뿐.. 유저 정보는 모르고 헤더에 토큰이 있는데 이 id는 비워서 보내도 되는 것인지..?
// 5. 지금 GET users/ 는 가입된 모든 회원을 조회하고 있음... API 생성 요청해야 하는지

// 커스텀 훅으로 (e.g. useUserState..) 변경 필요, 파일명은 ts가 되어야 한다 (e.g.useGetUserApi)

const useGetUserAPI = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}users/661a0e5febec873b54de2ad1`,
        );
        const userData = response.data.message;
        setUser(userData);
        // console.log(user); //디버깅 중 주석처리
        console.log('user 조회 성공하면 여기 값:', user); // 디버깅용 코드 -> 추후 디버깅되면 삭제
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return user;
};

export default useGetUserAPI;
