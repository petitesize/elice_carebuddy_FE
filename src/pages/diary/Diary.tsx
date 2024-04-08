import React from 'react';
import styled from 'styled-components';

import PetProfiles from '../../components/diary/PetProfiles';
import HealthDiary from '../../components/diary/HealthDiary';

const DiaryPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
`;

// 테스트용 더미데이터
const DummyProfilesData = {
  userName: 'UserName',
  name: 'Pet',
  breeds: '코리안 숏헤어',
  age: 16,
  img: '/src/assets/temp-profile.png',
};

const DummyDiaryData = {
  name: 'Pet',
  visitDate: new Date(2024, 3, 5),
  desease: 'DESEASE-19',
  symptom: '콧물, 눈물, 잦은 기침',
  hospitalizationStatus: new Date(2024, 3, 5),
  memo: `콧물이 많이 나오고, 
눈물도 많이 나오고, 
기침도 많이 나오고, 너무 아프고...
  `,
  hospitalName: '대전 동물병원',
  doctor: '강의사',
  treatment: '항생제',
};

const Diary: React.FC = () => {
  return (
    <DiaryPageContainer>
      <PetProfiles {...DummyProfilesData} />
      <HealthDiary {...DummyDiaryData} />
    </DiaryPageContainer>
  );
};

export default Diary;
