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

  // 쿠키에 코드 저장하는 함수
  const saveCodeToCookie = (code) => {
    document.cookie = `authCode=${code}; path=/;`;
  };

  // 로그인 여부 판별 함수
  const isLoggedIn = () => {
    const code = getCodeFromCookie();
    return !!code; // 코드가 있으면 로그인 상태로 판별
  };

  // 쿠키에서 코드를 가져오는 함수
  const getCodeFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'authCode') {
        return value;
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL에서 code 추출
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        // 코드가 없으면 처리하지 않음
        if (!code) return;

        // 코드를 쿠키에 저장
        saveCodeToCookie(code);

        // 코드를 서버로 보내어 토큰을 가져오는 요청
        const res = await axios.get(`auth/kakao/callback?code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem('token', token);
        console.log('토큰 :', token);
        navigate('/signup-info/auth/kakao/callback');
      } catch (e) {
        console.error(e);
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
