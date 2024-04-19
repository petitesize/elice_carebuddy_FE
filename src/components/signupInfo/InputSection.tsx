import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../baseComponent/InputBox';

const Container = styled.div``;

const Content = styled.div`
  padding: 10px 20px 30px 20px;
`;

const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  margin-bottom: 10px;
`;

const SecondTitle = styled.div`
  font-size: var(--font-size-md-1); //16
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin: 10px 0 0 0;
`

interface InputSectionProps {
  onNickNameChange: (value: string) => void; // 닉네임 변경 시 호출되는 콜백 함수
}

const InputSection: React.FC<InputSectionProps> = ({ onNickNameChange }) => {
  const [nickName, setNickName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNickName(value);

    // 닉네임 유효성 검사
    if (value.length < 2 || value.length > 10) {
      setErrorMessage('닉네임은 2자 이상 10자 이하로 입력해주세요.');
      // 유효하지 않은 닉네임을 부모 컴포넌트로 전달하지 않도록 함
      onNickNameChange('');
    } else {
      setErrorMessage(null);
      onNickNameChange(value);
    }
  };

  return (
    <Container>
      <Content>
        <Title>회원정보 입력</Title>
        <SecondTitle>닉네임*</SecondTitle>
        <InputContainer>
          <InputBox
            height="20px"
            width="100%"
            value={nickName}
            onChange={handleNickNameChange}
          />
        </InputContainer>
        {errorMessage && (
          <ErrorText>{errorMessage}</ErrorText>
        )}
      </Content>
    </Container>
  );
};

export default InputSection;
