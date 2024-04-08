import styled from 'styled-components';
import React from 'react';
import ProfileSection from './ProfileSection'
import PetCardSection from './PetCardSection'
import ListSection from './ListSection'

const Container = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
`;


const UserpageContent: React.FC = () => {
  return (
    <Container>
      <ProfileSection />
      <PetCardSection />
      <ListSection />
    </Container>
  );
};

export default UserpageContent;
