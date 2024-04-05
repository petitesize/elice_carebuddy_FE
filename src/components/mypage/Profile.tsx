import styled from 'styled-components';
import React, { useState } from 'react';

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

const Line = styled.hr`
  border: 1px solid #cecece;
`;

const Profile: React.FC = () => {
  return (
  <>
    <Container>
        <Menu>
        <Item>프로필</Item>
        <Line />
        </Menu>
        <Line />
      <UserContainer>
        <List>
          <Item>닉네임</Item>
          <Item>소개</Item>
        </List>
        <DataList>
          <Data>케어버디</Data>
          <Data>케어버디</Data>
          <Data>carebuddy@kakao.com</Data>
          <Data>01012345678</Data>
        </DataList>
      </UserContainer>
    </Container>
    </>
  );
};

export default Profile;
