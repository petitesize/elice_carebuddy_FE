import React from 'react';
import styled from 'styled-components';
import ActionButton from '../baseComponent/ActionButton';
import defaultImg from '/src/assets/carebuddyLogo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

// 카드 전체 컨테이너
const PetProfileCardsContainer = styled.div`
  height: 300px;
  display: flex;
  margin-top: 50px;
  width: 100%;
`;

// 카드 컨테이너
const PetProfileCardContainer = styled.div`
  width: 244px;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 20px; */
  position: relative;
  > div.action {
    position: absolute;

    top: 15px;
    right: 15px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ActionButtonContainer = styled.div`
  /* position: relative;
  > div:first-child {
    position: absolute;
    top: -30px;
    right: 0;
  } */
`;

const PetProfileImg = styled.img`
  width: 130px;
  height: 130px;
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
  margin-top: 22px;
  height: 26px;
  font-size: var(--font-size-hd-1);
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  margin-bottom: 6px;
  transition: color 0.3s ease;
  &.selectedPet {
    color: var(--color-green-main);
  }
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

const StyledSwiper = styled(Swiper)`
  width: 100%;
  > div {
    padding-top: 8px;
  }
  > div:last-child {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
  }
`;

interface PetProfile {
  name: string;
  kind: string;
  age: number;
  profileImg: string;
}

interface PetProfileProps {
  profiles: PetProfile[] | null;
  onClick: (pet: PetProfile) => void;
  selectedPetName?: string;
}

const PetProfileCards: React.FC<PetProfileProps> = ({
  profiles,
  selectedPetName,
  onClick,
}) => {
  const isMypet = location.pathname !== '/userpage';
  const handleClick = (pet: PetProfile) => {
    onClick(pet);
  };
  return (
    <PetProfileCardsContainer>
      <StyledSwiper
        slidesPerView={4}
        spaceBetween={40}
        slidesOffsetBefore={20}
        /* 전체적인 슬라이드의 오른쪽에 20px 공백을 준다. */
        slidesOffsetAfter={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {profiles &&
          profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <PetProfileCardContainer onClick={() => handleClick(profile)}>
                <ActionButtonContainer className="action">
                  {/* {isMypet && <MoreIcon src={MoreKebabIcon} />} */}
                  {isMypet && <ActionButton direction="vertical" />}
                </ActionButtonContainer>

                <PetProfileImg
                  src={profile.profileImg || defaultImg}
                  alt="프로필사진"
                />
                <PetName
                  className={
                    profile.name === selectedPetName ? 'selectedPet' : ''
                  }
                >
                  {profile.name}
                </PetName>
                <PetDetails>
                  {profile.kind} / {profile.age}살
                </PetDetails>
              </PetProfileCardContainer>
            </SwiperSlide>
          ))}
        {isMypet && (
          <SwiperSlide>
            <PetProfileCardContainer>
              <AddProfile />
              <AddProfileMsg>프로필 추가</AddProfileMsg>
            </PetProfileCardContainer>
          </SwiperSlide>
        )}
      </StyledSwiper>
    </PetProfileCardsContainer>
  );
};

export default PetProfileCards;
