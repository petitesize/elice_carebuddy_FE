import React from 'react';
import styled from 'styled-components';

import PetProfileCards from '../../components/diary/PetProfileCards';

import MoreKebabIcon from '../../assets/MoreKebabIcon.png';

const PetProfilesContainer = styled.div`
  height: 400px;
  display: block;
`;

const PetProfilesTitle = styled.div`
  font-size: var(--font-size-lg-1);
  font-weight: var(--font-weight-bold);
  margin: 50px 0;
`;

// 임시 데이터와 props
interface PetProfilesProps {
  userName: string;
  petName: string;
  breeds: string;
  petAge: number;
  petImg: string;
}

const PetProfiles: React.FC<PetProfilesProps> = ({
  userName,
  petName,
  breeds,
  petAge,
  petImg,
}) => {
  return (
    <PetProfilesContainer>
      <PetProfilesTitle>{userName} 님의 반려동물</PetProfilesTitle>
      <PetProfileCards
        petName={petName}
        breeds={breeds}
        petAge={petAge}
        petImg={petImg}
      />
    </PetProfilesContainer>
  );
};

export default PetProfiles;
