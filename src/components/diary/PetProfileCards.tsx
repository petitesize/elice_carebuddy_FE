import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ActionButton from '../baseComponent/ActionButton';
// import defaultImg from '/src/assets/carebuddyLogo.png';
import defaultImg from '/src/assets/defaultProfileDummy.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import PetRegister from '../../pages/petRegister/PetRegister';
import PetEdit from '../../pages/petEdit/PetEdit';
import { API_URL, UPLOADED_IMG_URL } from '../../constants/constants';
import BigModal from '../baseComponent/BigModal';

import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

// 카드 전체 컨테이너
const PetProfileCardsContainer = styled.div`
  height: 300px;
  display: flex;
  width: 100%;
`;

// 카드 컨테이너
const PetProfileCardContainer = styled.div`
  width: 244px;
  height: 90%;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
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
  :hover {
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
  object-fit: cover;
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

export interface ImageFormData {
  // 어떤 타입인지 몰라 테스트해보고 결정
  buddyImage?: File | null;
}

const PetProfileCards: React.FC<PetProfileProps> = ({
  profiles,
  selectedPetName,
  onClick,
}) => {
  const [recordId, setRecordId] = useState<string | null>(null); // 수정하려는 반려동물의 id 상태 추가
  const [showPetRegister, setShowPetRegister] = useState(false);
  const [showPetEdit, setShowPetEdit] = useState(false);
  const isMypet = location.pathname !== '/userpage';
  const [imageFormData, setImageFormData] = useState<ImageFormData>({
    buddyImage: null,
  });

  const [formData, setFormData] = useState({
    userId: null,
    name: null,
    kind: null,
    age: null,
    sex: null,
    weight: null,
    isNeutered: null
  });

  const handleClick = (pet: PetProfile) => {
    onClick(pet);
  };

  const openPetRegister = () => {
    setShowPetRegister(true);
  };

  const handleEditButtonClick = (id: string) => { //원래의 openPetEdit
    setShowPetEdit(true); // 수정 모달 표시
    setRecordId(id); // id값 설정
  };

  const handleCloseModal = () => {
    setShowPetRegister(false);
    setShowPetEdit(false);
  };

  const formDataForPOST = {
    ...formData,
    userId: useRecoilValue(userState)?._id,
  };

  const handlePetRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}buddy`, formDataForPOST); // 동물 등록에 대한 post요청(API 바꾸기)
      const createdPetRegisterId: string = response.data.data._id; // 새로 생긴 _id값
      console.log(createdPetRegisterId);

      setShowPetRegister(false); // 모달 닫기
      setFormData({
        // 데이터 초기화
        userId: null,
        name: null,
        kind: null,
        age: null,
        sex: null,
        weight: null,
        isNeutered: null
      });

      // 이미지 함께 전송
      if (imageFormData) {
        await sendImage(imageFormData, createdPetRegisterId);
      }

      console.log('동물 등록 성공', response.data.data);
    } catch (error) {
      console.error('동물 등록 실패:', error);
    }
  };

  const sendImage = async (imageFormData, PetRegisterId: string) => {
    //이미지 등록하는 함수
    try {
      const response = await axios.post(
        `${API_URL}buddy/${PetRegisterId}/buddyImage`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('이미지 업로드 성공:', response.data);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handlePetEdit = async () => { //에딧 함수
    try {
      const response = await axios.put(`${API_URL}buddy/${recordId}`, formDataForPOST); // 동물 수정에 대한 put요청(API 바꾸기)

      setShowPetRegister(false); // 모달 닫기
      setFormData({
        // 데이터 초기화
        userId: null,
        name: null,
        kind: null,
        age: null,
        sex: null,
        weight: null,
        isNeutered: null
      });

      // 이미지 함께 전송
      if (imageFormData) {
        await sendImage(imageFormData, recordId);
      }

      console.log('동물 수정 성공', response.data.data);
      handleCloseModal();
    } catch (error) {
      console.error('동물 수정 실패:', error);
    }
  };

  const handleData = (formData) => {
    setFormData(formData);
  };

  const handleImageData = (imageFormData) => {
    setImageFormData(imageFormData);
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
              <PetProfileCardContainer>
                <ActionButtonContainer className="action">
                  {/* {isMypet && <MoreIcon src={MoreKebabIcon} />} */}
                  {isMypet && (
                    <ActionButton
                      direction="vertical"
                      onEdit={() => handleEditButtonClick(profile?._id)}
                      // onDelete={() => handleDeleteButtonClick(data._id)} 아직 이 함수 없음

                    />
                  )}
                </ActionButtonContainer>

                <PetProfileImg
                  src={`${UPLOADED_IMG_URL}public/defaultbuddyImage.png`}
                  alt="프로필사진"
                  onClick={() => handleClick(profile)}
                />
                <PetName
                  className={
                    profile.name === selectedPetName ? 'selectedPet' : ''
                  }
                  onClick={() => handleClick(profile)}
                >
                  {profile.name}
                </PetName>
                <PetDetails onClick={() => handleClick(profile)}>
                  {profile.kind} / {profile.age}살
                </PetDetails>
              </PetProfileCardContainer>
            </SwiperSlide>
          ))}
        {isMypet && (
          <SwiperSlide>
            <PetProfileCardContainer onClick={openPetRegister}>
              <AddProfile />
              <AddProfileMsg>프로필 추가</AddProfileMsg>
            </PetProfileCardContainer>
          </SwiperSlide>
        )}
      </StyledSwiper>
      {showPetRegister && (
        <BigModal
          title="동물 등록"
          value="등록"
          component={
            <PetRegister
              onSubmit={handleData}
              onSubmitImage={handleImageData}
            />
          }
          onClose={handleCloseModal}
          onHandleClick={handlePetRegister}
        />
      )}
      {showPetEdit && (
        <BigModal
          title="동물 정보 수정"
          value="수정"
          component={<PetEdit onSubmit={handleData} onSubmitImage={handleImageData} recordId={recordId}/>}
          onClose={handleCloseModal}
          onHandleClick={handlePetEdit}
        />
      )}
    </PetProfileCardsContainer>
  );
};

export default PetProfileCards;
