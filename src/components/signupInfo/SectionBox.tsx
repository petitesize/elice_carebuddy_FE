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
