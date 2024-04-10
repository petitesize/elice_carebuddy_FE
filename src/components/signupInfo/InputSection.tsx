import React from 'react';
import styled from 'styled-components';
import InputBox from '../baseComponent/InputBox';

const Container = styled.div`
`;

const Content = styled.div`
  padding: 0 20px 20px 20px;
`
const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //20
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
`

const InputSection: React.FC = () => {
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
          <InputContainer>
            <InputBox height='20px' width='100%' />
          </InputContainer>
        </Content>
    </Container>
  );
};

export default InputSection;
