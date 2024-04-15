import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
`

const SectionBox: React.FC = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  //인가코드 백으로 보내는 코드
  useEffect(() => {
    const kakaoLogin = async () => {
      if (code) { // code 값이 존재하는 경우에만 실행
        await axios({
          method: "GET",
          url: `http://localhost:5173/signup-info/auth/kakao/callback/?code=${code}`,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }).then((res) => {
          console.log('res: ', res);
          localStorage.setItem("name", res.data.account.kakaoName);
          navigate("/");
        });
      }
    };
    kakaoLogin();
  }, [code]); // code 값이 변경될 때마다 useEffect 재실행

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
