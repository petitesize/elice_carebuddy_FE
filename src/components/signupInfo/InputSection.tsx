import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../baseComponent/InputBox';

const Container = styled.div`
`;

const Content = styled.div`
  padding: 0 20px 20px 20px;
`
const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  margin-bottom: 10px;
`;

const SecondTitle = styled.div`
  font-size: var(--font-size-md-1); //16
  margin-bottom: 5px;
`
const InputContainer = styled.div`
  display: flex;
`

interface InputSectionProps {
  onNickNameChange: (value: string) => void; // 닉네임 변경 시 호출되는 콜백 함수
}

const InputSection: React.FC<InputSectionProps> = ({ onNickNameChange }) => {
  const [nickName, setNickName] = useState('');

  const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNickName(value);
    onNickNameChange(value); // 닉네임 변경 시 상위 컴포넌트로 전달
  };

  return (
    <Container>
        <Content>
          <Title>아이디</Title>
          <InputContainer>
            <InputBox height='20px' width='100%' />
          </InputContainer>
        </Content>
        <Content>
          <Title>회원정보 입력</Title>
          <SecondTitle>닉네임*</SecondTitle>
          <InputContainer>
            <InputBox height='20px' width='100%' value={nickName} onChange={handleNickNameChange} />
          </InputContainer>
        </Content>
    </Container>
  );
};

export default InputSection;
