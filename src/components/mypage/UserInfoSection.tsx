import styled from 'styled-components';
import React, { useState } from 'react';
import SmallModal from '../modals/SmallModal'
import UserAsk from '../../pages/mypage/UserAsk';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  display: flex;
  margin: 20px 0 40px 0;
`;

const Menu = styled.span`
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
      email: 'carebuddy@kakao.com',
    };

  return (
    <Container>
        <Menu>
        <Item>회원정보</Item>
        <Line />
        </Menu>
      <UserContainer>
        <List>
          <Item>이메일</Item>
        </List>
        <DataList>
          <Data>{`${DummyUserInfoData.email}`}</Data>
          <WithdrawButton onClick={handleToggleModal}>회원탈퇴</WithdrawButton>
          {showModal && <SmallModal component={<UserAsk onClose={handleToggleModal} />} />}
        </DataList>
      </UserContainer>
    </Container>
  );
};

export default UserInfo;