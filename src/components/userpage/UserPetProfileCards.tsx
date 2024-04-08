import React from 'react';
import styled from 'styled-components';
import MoreKebabIcon from '../../assets/MoreKebabIcon.png';

// 카드 전체 컨테이너
const PetProfileCardsContainer = styled.div`
  height: 300px;
  display: flex;
`;

// 카드 컨테이너
const PetProfileCardConatiner = styled.div`
  width: 244px;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const MoreIcon = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: #cecece;
`;

const PetProfileImg = styled.img`
  width: 150px;
  height: 150px;
  background: rgba(152, 185, 156, 0.3);
  border-radius: 50%;
  border: 0;
  overflow: hidden;
  text-align: center;
`;

// 프로필이 없을 때
const AddProfile = styled.div`
  width: 100px;
  height: 100px;
  background: #cecece;
  border-radius: 50%;
  border: 0;
  overflow: hidden;
`;

const PetName = styled.p`
  margin-top: 26px;
  height: 26px;
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  margin-bottom: 4px;
`;

const AddProfileMsg = styled.p`
  margin-top: 26px;
  font-size: 18px;
  text-align: center;
  color: #7d7d7d;
`;

const PetDetails = styled.p`
  width: 100%;
  height: 19px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7d7d7d;
  margin: 0;
`;

interface PetProfilesProps {
  petName: string;
  breeds: string;
  petAge: number;
  petImg: string;
}

const PetProfileCards: React.FC<PetProfilesProps> = ({
  petName,
  breeds,
  petAge,
  petImg,
}) => {
  return (
    <PetProfileCardsContainer>
      <PetProfileCardConatiner>
        <MoreIcon src={MoreKebabIcon} />
        <PetProfileImg src={petImg} alt="프로필사진" />
        <PetName>{petName}</PetName>
        <PetDetails>
          {breeds} / {petAge}살
        </PetDetails>
      </PetProfileCardConatiner>
      <PetProfileCardConatiner>
        <MoreIcon src={MoreKebabIcon} />
        <PetProfileImg src={petImg} alt="프로필사진" />
        <PetName>{petName}</PetName>
        <PetDetails>
          {breeds} / {petAge}살
        </PetDetails>
      </PetProfileCardConatiner>
    </PetProfileCardsContainer>
  );
};

export default PetProfileCards;
