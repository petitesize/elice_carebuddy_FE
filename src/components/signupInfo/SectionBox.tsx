import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button';
import AgreementSection from './AgreementSection';
import InputSection from './InputSection';

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

  const AUTHORIZE_CODE: string | null = new URLSearchParams(window.location.search).get("code");
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY = "fc0445196ca1bc948515866bb1fba56e";
  const REDIRECT_URI = "http://localhost:5173/signup-info/auth/kakao/callback";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!AUTHORIZE_CODE) return;

        const tokenResponse = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );
        const token = tokenResponse.data.access_token;

        const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
          },
        });

        const user = userResponse.data;
        const userEmail = user.kakao_account.email;
        console.log('사용자 이메일 :', userEmail);

        setEmail(userEmail);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [AUTHORIZE_CODE, GRANT_TYPE, REST_API_KEY, REDIRECT_URI]);

  const sendUserDataToServer = async () => {
    try {
      const data = {
        categories: [],
        buddyId: [],
        nickName: nickName,
        email: email,
        adminNumber: 0,
        profileImage: []
      };

      const response = await axios.post(`${API_URL}users`, {
        'email': `${email}`,
        'nickName': `${nickName}`
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버에 유저 데이터 전송 중 오류 발생:', error);
    }
  };

  return (
    <Container>
      <Component>
        <InputSection onNickNameChange={setNickName} />
        <AgreementSection />
        <ButtonBox>
          <Button variant="primary" padding='20px 40px' onClick={sendUserDataToServer}>가입하기</Button>
        </ButtonBox>
      </Component>
    </Container>
  );
};

export default SectionBox;
