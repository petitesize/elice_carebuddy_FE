import styled from 'styled-components';
import React from 'react';
import UserInfo from './UserInfo';
import Profile from './Profile'
import PetCard from './PetCard'

const Container = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
`;


const Card: React.FC = () => {
  return (
  <>
    <Container>
      <UserInfo />
      <Profile />
      <PetCard />
    </Container>
    </>
  );
};

export default Card;
