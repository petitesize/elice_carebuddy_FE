import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PetProfileCards from './PetProfileCards';

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
  kind: string;
  age: number;
  profileImg: string;
}

interface PetProfilesProps {
  userName?: string;
  pets?: PetProfile[] | null; // 아직 반려동물이 등록되지 않았을 경우 고려
  onPetClick: (pet: PetProfile) => void;
  selectedPetName?: string;
}

const PetProfiles: React.FC<PetProfilesProps> = ({
  userName,
  pets,
  selectedPetName,
  onPetClick,
}) => {
  const handleClick = (pet: PetProfile) => {
    onPetClick(pet);
  };

  return (
    <PetProfilesContainer>
      <PetProfilesTitle>{userName} 님의 반려동물</PetProfilesTitle>
      <PetProfileCards
        profiles={pets || null}
        selectedPetName={selectedPetName}
        onClick={handleClick}
      />
    </PetProfilesContainer>
  );
};

export default PetProfiles;
