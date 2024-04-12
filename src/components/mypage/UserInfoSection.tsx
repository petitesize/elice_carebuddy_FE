import styled from 'styled-components';
import React, { useState } from 'react';
import SmallModal from '../baseComponent/SmallModal'
import UserAsk from '../../pages/mypage/UserAsk';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin: 30px 0 30px 0;
`

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  margin: 10px 0 10px 0;
`;

const Menu = styled.p`
  font-size: var(--font-size-hd-2); //22
  font-weight: bold;
  border-bottom: 1px solid #cecece;
  padding-bottom: 10px;
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
  font-size: var(--font-size-ft-1);
`;

const Data = styled.a`
  padding: 10px 10px 10px 0;
`;

interface UserInfoProps {
  nickName?: string;
  email?: string;
  introduce?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ nickName, email, introduce }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

    // 더미 데이터
    // const DummyUserInfoData = {
    //   email: 'carebuddy@kakao.com',
    // };

  return (
    <Container>
        <Menu>
        <Item>회원정보</Item>
        </Menu>
      <Section>
        <UserContainer>
          <List>
            <Item>이메일</Item>
          </List>
          <DataList>
            <Data>{email}</Data>
            <WithdrawButton onClick={handleToggleModal}>회원탈퇴</WithdrawButton>
            {showModal && <SmallModal component={<UserAsk onClose={handleToggleModal} />} />}
          </DataList>
        </UserContainer>
        <UserContainer>
          <List>
            <Item>닉네임</Item>
          </List>
          <DataList>
              <Data>{nickName}</Data>
            </DataList>
        </UserContainer>
        <UserContainer>
          <List>
            <Item>소개글</Item>
          </List>
          <DataList>
            <Data>{introduce}</Data>
          </DataList>
        </UserContainer>
      </Section>
    </Container>
  );
};

export default UserInfo;