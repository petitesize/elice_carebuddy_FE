import styled from 'styled-components';
import React, { useState } from 'react';
import UserAsk from '../../pages/mypage/UserAsk';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  display: flex;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-size: 20px;
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
  padding: 10px 10px 0 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Data = styled.a`
  padding: 10px 10px 10px 0;
`;

const Line = styled.hr`
  border: 1px solid #cecece;
`;

const UserInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

    // 더미 데이터
    const DummyUserInfoData = {
      name: '케어버디',
      email: 'carebuddy@kakao.com',
      phone: '01012345678',
    };

  return (
  <>
    <Container>
        <Menu>
        <Item>회원정보</Item>
        <Line />
        </Menu>
      <UserContainer>
        <List>
          <Item>성명</Item>
          <Item>이메일</Item>
          <Item>핸드폰 번호</Item>
        </List>
        <DataList>
          <Data>{`${DummyUserInfoData.name}`}</Data>
          <Data>{`${DummyUserInfoData.email}`}</Data>
          <Data>{`${DummyUserInfoData.phone}`}</Data>
          <WithdrawButton onClick={handleToggleModal}>회원탈퇴</WithdrawButton>
          {showModal && <UserAsk onClose={handleToggleModal} />}
        </DataList>
      </UserContainer>
    </Container>
    </>
  );
};

export default UserInfo;
