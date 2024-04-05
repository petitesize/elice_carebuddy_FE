import styled from 'styled-components';
import React, { useState } from 'react';
import UserTrue from '../../pages/mypage/UserTrue';
import Profile from '../../components/mypage/Profile';

const Container = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  display: flex;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const DataList = styled.span`
  display: flex;
  flex-direction: column;
`;

const WithdrawButton = styled.a`
  padding: 10px 10px 10px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Data = styled.a`
  padding: 10px 10px 10px 0;
`;

const UserInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
  <>
    <Container>
        <Menu>
        <Item>회원정보</Item>
        </Menu>
      <UserContainer>
        <List>
          <Item>성명</Item>
          <Item>이메일</Item>
          <Item>핸드폰 번호</Item>
        </List>
        <DataList>
          <WithdrawButton onClick={handleToggleModal}>회원탈퇴</WithdrawButton>
          {showModal && <UserTrue onClose={handleToggleModal} />}
          <Data>케어버디</Data>
          <Data>carebuddy@kakao.com</Data>
          <Data>01012345678</Data>
        </DataList>
      </UserContainer>
    </Container>
    </>
  );
};

export default UserInfo;
