import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  background-color: #cecece;
`

const TextList = styled.div`
  background-color: white;
`
const Mypage: React.FC = () => {
  return (
    <>
    <UserContainer>
      <TextList>
        <a>회원정보</a>
        <a>회원탈퇴</a>
      </TextList>
      <TextList>
        <a>회원정보</a>
        <a>회원탈퇴</a>
      </TextList>
      <TextList>
        <a>회원정보</a>
        <a>회원탈퇴</a>
      </TextList>
    </UserContainer>

    </>
  );
};

export default Mypage;
