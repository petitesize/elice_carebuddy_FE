import styled from 'styled-components';
import React, { useState } from 'react';
import UserTrue from './UserTrue';
import Profile from '../../components/mypage/Profile';
import UserInfo from '../../components/mypage/UserInfo';

const Container = styled.div`
  background-color: blue;
  padding: 20px 0 20px 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  background-color: grey;
  font-size: 16px;
  display: flex;
`;

const Menu = styled.span`
  padding: 20px 20px 20px 0;
  background-color: aliceblue;
  font-size: 26px;
  font-weight: bold;
`;

const List = styled.span`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 20px 20px 20px 0;
`;

const DataList = styled.span`
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const WithdrawButton = styled.a`
  padding: 20px 20px 20px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Data = styled.a`
  padding: 20px 20px 20px 0;
`;

const Mypage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <UserInfo />
      <Profile />
    </>
  );
};

export default Mypage;
