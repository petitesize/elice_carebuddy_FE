import React from 'react';
import styled from 'styled-components';

import PetProfileCards from './PetProfileCards';

// import MoreKebabIcon from '../../assets/MoreKebabIcon.png';

const PetProfilesContainer = styled.div`
  height: 400px;
  display: block;
`;

const PetProfilesTitle = styled.div`
  font-size: var(--font-size-hd-2);
  font-weight: var(--font-weight-bold);
  margin: 20px 0;
`;

// 임시 데이터와 props
interface PetProfile {
  name: string;
  breeds: string;
  age: number;
  img: string;
}

interface PetProfilesProps {
  userName: string;
  pets: PetProfile[];
}

const PetProfiles: React.FC<PetProfilesProps> = ({ userName, pets }) => {
  return (
    <PetProfilesContainer>
      <PetProfilesTitle>{userName} 님의 반려동물</PetProfilesTitle>
      <PetProfileCards profiles={pets} />
    </PetProfilesContainer>
  );
};

export default PetProfiles;
