import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PetProfiles from '../../components/diary/PetProfiles';
import HealthDiary from '../../components/diary/HealthDiary';

import Dummy from './Dummy';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

const DiaryPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`;

const YourComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}hospital`);

        console.log(response.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

// 테스트용 더미데이터
const DummyProfilesData = {
  userName: 'Owner1',
  pets: [
    {
      name: 'Cat1',
      breeds: '코리안 숏헤어',
      age: 16,
      img: '/src/assets/temp-profile.png',
    },
    {
      name: 'Cat2',
      breeds: '래그돌',
      age: 4,
      img: '/src/assets/temp-profile.png',
    },
    {
      name: 'Cat3',
      breeds: '코리안 숏헤어',
      age: 16,
      img: '/src/assets/temp-profile.png',
    },
  ],
};
// const DummyDiaryData = {
//   name: 'Pet',
//   visitDate: new Date(2024, 3, 5),
//   desease: 'DESEASE-19',
//   symptom: '콧물, 눈물, 잦은 기침',
//   hospitalizationStatus: new Date(2024, 3, 5),
//   memo: `콧물이 많이 나오고,
// 눈물도 많이 나오고,
// 기침도 많이 나오고, 너무 아프고...
//   `,
//   hospitalName: '대전 동물병원',
//   doctor: '강의사',
//   treatment: '항생제',
// };

interface User {
  nickName: string;
}

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
  // 사용자 정보
  const [user, setUser] = React.useState<User | null>(null);
  // 반려동물의 병원 기록 => 기록이 여러 개[]일 수도, 없을 수도 있음
  const [hospitalRecords, setHospitalRecords] = useState<any[]>([]);
  console.log(selectedPet);

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

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
        console.log(buddyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}users/6617b4493122a35bf1a26f8d`,
        );
        const userData = response.data.message;
        setUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
  }, []);
  const filteredHospitalRecords = hospitalRecords.filter(
    (record) => record.buddyId === selectedPet?._id,
  );
  console.log(filteredHospitalRecords);
  console.log(selectedPet?.name);
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
        diaryData={filteredHospitalRecords}
      />
    </DiaryPageContainer>
  );
};

export default Diary;
