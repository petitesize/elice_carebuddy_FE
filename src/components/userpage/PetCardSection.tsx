import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import PetProfileCards from '../diary/PetProfileCards';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 30px 0 30px 0;
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

// 임시 데이터와 props
interface PetProfile {
  name: string;
  kind: string;
  age: number;
  profileImg: string;
}

interface PetProfilesProps {
  nickName?: string;
  pets?: PetProfile[] | null; // 아직 반려동물이 등록되지 않았을 경우 고려
  onPetClick: (pet: PetProfile) => void;
  selectedPetName?: string;
}

const PetCard: React.FC<PetProfilesProps> = ({
  nickName,
  pets,
  selectedPetName,
  onPetClick,
}) => {
  const handleClick = (pet: PetProfile) => {
    onPetClick(pet);
  };



  return (
    <Container>
      <Menu>
        <Item>{nickName}님의 반려동물</Item>
      </Menu>
      <UserContainer>
        <PetProfileCards 
          profiles={pets || null}
          selectedPetName={selectedPetName}
          onClick={handleClick}
        />
      </UserContainer>
    </Container>
  );
};

export default PetCard;


