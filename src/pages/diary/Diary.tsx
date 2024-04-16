import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PetProfiles from '../../components/diary/PetProfiles';
import HealthDiary from '../../components/diary/HealthDiary';

import axios from 'axios';
import { API_URL } from '../../constants/constants';

import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

const DiaryPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`;

interface Pet {
  _id?: string;
  name: string;
  kind: string;
  age: number;
  profileImg: string;
}

const Diary: React.FC = () => {
  // 사용자의 반려동물 => 반려동물이 여러 마리[]일 수도, 없을 수도 있음
  const [buddy, setBuddy] = React.useState<Pet[] | null>([]);
  // 현재 선택된 반려동물 => 다이어리에 처음 보여줄 반려동물 1마리, 또는 없을 수도 있음
  const [selectedPet, setSelectedPet] = useState<Pet | null>();

  const [user, setUser] = useRecoilState(userState); //O.K
  // 반려동물의 병원 기록 => 기록이 여러 개[]일 수도, 없을 수도 있음
  const [hospitalRecords, setHospitalRecords] = useState<any[]>([]);

  // 선택된 반려동물
  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  // 헤더에 토큰 추가해야함, 전체 반려동물 data state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        const buddyData = response.data.message;
        setBuddy(buddyData);

        // 첫 렌더링 되었을 때, 선택된 펫이 없으므로 등록된 반려동물이 있는 경우 첫 번째 반려동물을 선택된 펫으로 지정
        if (!selectedPet && buddyData.length > 0) {
          setSelectedPet(buddyData[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setBuddy]);

  // 병원 기록 data state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}hospital`);
        const hospitalData = response.data.message;
        setHospitalRecords(hospitalData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [hospitalRecords]);

  // 해당 반려동물의 병원기록만 filter
  const filteredHospitalRecords = hospitalRecords.filter(
    (record) => record.buddyId === selectedPet?._id,
  );

  return (
    <DiaryPageContainer>
      <PetProfiles
        userName={user?.nickName}
        selectedPetName={selectedPet?.name}
        pets={buddy}
        onPetClick={handlePetClick}
      />
      <HealthDiary
        petName={selectedPet?.name}
        petId={selectedPet?._id}
        diaryData={filteredHospitalRecords}
      />
    </DiaryPageContainer>
  );
};

export default Diary;
