import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log('code : ', code);

        // 액세스 토큰 요청
        const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', {
          grant_type: 'authorization_code',
          client_id: 'fc0445196ca1bc948515866bb1fba56e',
          redirect_uri: 'http://localhost:5173/signup-info/auth/kakao/callback',
          client_secret: 'TJ3MdeN2kNqqzK2YC8yFfI8ZpBaAGEMF',
          code: code,
        });

        const accessToken = tokenResponse.data.access_token;

        // 사용자 정보 요청
        const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const email = userResponse.data.kakao_account.email;
        console.log(userResponse);
        console.log(email);

        // 서버로 인가 코드와 사용자 이메일을 전송
        await axios.post('/auth/login', { code, email });

        // 로그인 후 리다이렉트 등 필요한 작업 수행
        navigate('/signup-info/auth/kakao/callback');
      } catch (error) {
        console.error(error);
        // 에러 처리
        navigate('/*');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Container>
      <Component>
        <InputSection />
        <AgreementSection />
        <ButtonBox>
          <Button variant="primary" padding='20px 40px'>가입하기</Button>
        </ButtonBox>
      </Component>
    </Container>
  );
};

export default SectionBox;
