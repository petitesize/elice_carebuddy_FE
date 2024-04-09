import styled from 'styled-components';
import React from 'react';
import PetProfileCards from './UserPetProfileCards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 10px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const PetCard: React.FC = () => {

  // 더미 데이터
  const DummyData = {
    nickName: '케어버디',
    petName: '냥이',
    breeds: '여자',
    petAge: 2,
    petImg: 'undefined',
  };

  return (
    <Container>
      <Menu>
        <Item>{DummyData.nickName}님의 반려동물</Item>
      </Menu>
      <UserContainer>
        <PetProfileCards petName={DummyData.petName} breeds={DummyData.breeds} petAge={DummyData.petAge} petImg={DummyData.petImg} />
      </UserContainer>
    </Container>
  );
};

export default PetCard;
