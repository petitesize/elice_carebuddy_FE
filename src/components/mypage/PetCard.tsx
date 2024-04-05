import styled from 'styled-components';
import React from 'react';
import PetProfileCards from '../diary/PetProfileCards';

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
  font-weight: bold;
  font-size: 20px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const Line = styled.hr`
  border: 1px solid #cecece;
`;

const UserInfo: React.FC = () => {

  // 더미 데이터
  const DummyUserInfoData = {
    name: '케어버디',
    email: 'carebuddy@kakao.com',
    phone: '01012345678',
  };

  return (
  <Container>
    <Menu>
      <Item>프로필</Item>
      <Line />
    </Menu>
    <UserContainer>
      {/* 재사용되는 컴포넌트를 여기에 불러옴*/}
    </UserContainer>
    </Container>
  );
};

export default UserInfo;
