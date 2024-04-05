import styled from 'styled-components';
import React, { useState } from 'react';
import UserTrue from './UserTrue';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px; /* 전역으로 폰트 크기를 16px로 설정 */
  }
`;

const UserContainer = styled.div`
  background-color: grey;
  padding: 20px 0 20px 0;
  display: flex;
`;

const List = styled.span`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  font-weight: bold;
`;

const DataList = styled.span`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Data = styled.a`
  font-size: 26px;
`;

const Mypage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <GlobalStyle />
      <UserContainer>
        <List>
          <Item>회원정보</Item>
          <Item>성명</Item>
          <Item>이메일</Item>
          <Item>핸드폰 번호</Item>
        </List>
        <DataList>
          <Data onClick={handleToggleModal}>회원탈퇴</Data>
          {showModal && <UserTrue onClose={handleToggleModal} />}
          <Data>케어버디</Data>
          <Data>carebuddy@kakao.com</Data>
          <Data>01012345678</Data>
        </DataList>
      </UserContainer>
    </>
  );
};

export default Mypage;
