import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/baseComponent/Button';
import AgreementSection from './AgreementSection';
import InputSection from './InputSection';
import { userToken } from '../../recoil/selectors';
import { useSetRecoilState } from 'recoil';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Component = styled.div`
  border: 1px solid var(--color-grey-2);
  border-radius: 7px;
  padding: 30px 20px 30px 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SectionBox: React.FC = () => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  // const setUser = useSetRecoilState(userToken);
  const navigate = useNavigate(); // useNavigate 훅 사용

  console.log('setUser: ');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // 'http://localhost:3001/api/auth/checking',
          'http://kdt-sw-8-team01.elicecoding.com/api/auth/checking',
          { withCredentials: true },
        );
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sendUserDataToServer = async () => {
    try {
      const setUser = useSetRecoilState(userToken);
      const data = {
        categories: [],
        buddyId: [],
        nickName: nickName,
        email: email,
        adminNumber: 0,
        profileImage: [],
      };
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
      // 서버로 POST 요청 보내기
      const response = await axios.post(`${API_URL}users`, data);

      // 서버 응답이 성공적일 경우
      if (response.status === 201) {
        // alert 창을 띄워 성공 메시지를 표시
        alert('회원가입에 성공했습니다!');
        // 지정된 URL로 페이지 이동
        navigate('/');
      } else {
        console.error(
          '서버 응답이 성공적이지 않았습니다:',
          response.statusText,
        );
      }
    } catch (error) {
      console.error('서버에 유저 데이터 전송 중 오류 발생:', error);
    }
  };

  // useEffect(() => {
  //   //check if "access_token" exists in Cookie and set it to Recoil
  //   const token = document.cookie
  //     .split(';')
  //     .find((cookie) => cookie.trim().startsWith('accessToken='))
  //     ?.split('=')[1];
  //   if (token) {
  //     setUser(token);
  //   }
  // }, []);

  return (
    <Container>
      <Component>
        <InputSection onNickNameChange={setNickName} />
        <AgreementSection />
        <ButtonBox>
          <Button
            variant="primary"
            padding="20px 40px"
            onClick={sendUserDataToServer}
          >
            가입하기
          </Button>
        </ButtonBox>
      </Component>
    </Container>
  );
};

export default SectionBox;
