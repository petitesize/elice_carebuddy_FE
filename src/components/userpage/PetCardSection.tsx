import styled from 'styled-components';
import React from 'react';
import PetProfileCards from '../diary/PetProfileCards';

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
  // const DummyData = {
  //   nickName: '케어버디',
  //   petName: '냥이',
  //   breeds: '여자',
  //   petAge: 2,
  //   petImg: 'undefined',
  // };
  const DummyData = {
    nickName: 'Owner1',
    pets: [
      {
        name: 'Cat1',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat2',
        breeds: '래그돌',
        age: 4,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat3',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat4',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
    ],
  };

  return (
    <Container>
      <Menu>
        <Item>{DummyData.nickName}님의 반려동물</Item>
      </Menu>
      <UserContainer>
        <PetProfileCards profiles={DummyData.pets} />
      </UserContainer>
    </Container>
  );
};

export default PetCard;
