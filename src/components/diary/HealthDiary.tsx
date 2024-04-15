import React, { useState } from 'react';
import styled from 'styled-components';
import BigModal from '../baseComponent/BigModal';
import RecMade from '../../pages/diary/RecMade';
import RecEdit from '../../pages/diary/RecEdit';
import Button from '../baseComponent/Button';
import ActionButton from '../baseComponent/ActionButton';
import {
  LuPill,
  LuActivitySquare,
  LuStethoscope,
  LuMessageSquarePlus,
} from 'react-icons/lu';
import { TbBuildingHospital, TbReportMedical } from 'react-icons/tb';
import DiaryDetails from './DiaryDetails';

const HealthDiaryContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 50px 80px 40px 60px;
  border: 1px solid #cecece;
  border-radius: 6px 80px 6px 6px;
  margin-top: 100px;
  position: relative;
  margin-bottom: 10%;
`;

const DeseaseTitle = styled.h2`
  font-size: var(--font-size-hd-1);
  font-weight: var(--font-weight-medium);
  height: auto;
  margin-left: 10px;
`;

const DiaryTitle = styled.h2`
  font-size: var(--font-size-hd-2);
  font-weight: var(--font-weight-bold);
  height: 115px;
  color: var(--color-green-main);
  > span {
    color: var(--color-black-main);
  }
`;

const HorizontalLine = styled.div`
  border-top: 3px solid var(--color-green-sub-2);
  top: 115px;
  left: 0;
  width: 100%;
  position: absolute;
`;

// 타이틀을 포함한 다이어리 컨테이너
const DiariesContainer = styled.div`
  height: 280px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 150px;
`;

// 다이어리 본문 컨테이너
const HealthReport = styled.div`
  padding: 20px 3%;
  margin-top: 24px;
  height: 100%;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  display: flex;
  position: relative;
  > div:first-child {
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const DeseaseName = styled.div`
  display: flex;
  height: 26px;
  width: 20%;
  padding-top: 26px;
  padding-right: 30px;
`;

const Icon = styled.div`
  > svg {
    width: 20px;
    height: 20px;
    color: var(--color-green-main);

    &.big {
      width: 24px;
      height: 24px;
    }
  }
`;

interface DiaryProps {
  consultationDate: String;
  disease: string;
  symptom: string;
  hospitalizationStatus: Date;
  memo: string;
  address: string;
  doctorName: string;
  treatment: string;
}

interface HealthDiaryProps {
  petName?: string;
  diaryData: DiaryProps[];
}

const HealthDiary: React.FC<HealthDiaryProps> = ({ petName, diaryData }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteButtonClick = () => {
    setShowModal(true);
  };

  const handleToggleEditModal = () => {
    // 수정 모달 표시 여부를 관리하는 함수
    setShowEditModal(!showEditModal);
  };

  const handleEditButtonClick = () => {
    setShowEditModal(true); // 수정하기 버튼 클릭 시 수정 모달 표시
  };

  return (
    <HealthDiaryContainer>
      <DiaryTitle className="diaryTitle">
        {petName} <span>건강 다이어리</span>
      </DiaryTitle>
      <HorizontalLine />
      <Button
        onClick={handleToggleModal}
        variant={'primary'}
        shape={'square'}
        padding={'8px 40px'}
        children={'기록하기'}
      ></Button>
      {showModal && (
        <BigModal
          title="진료 기록 등록"
          value="등록"
          component={<RecMade />}
          onClose={handleToggleModal}
        />
      )}
      {showEditModal && (
        <BigModal
          title="진료 기록 수정"
          value="수정"
          component={<RecEdit />} // 수정 모달을 불러옴
          onClose={handleToggleEditModal}
        />
      )}
      {diaryData.length > 0 ? (
        diaryData.map((data, index) => (
          <DiariesContainer key={index}>
            <p>{data.consultationDate}</p>
            <HealthReport>
              <ActionButton
                onEdit={handleEditButtonClick}
                direction="horizontal"
                border="none"
              />
              <DeseaseName>
                <Icon>
                  <TbReportMedical className="big" />
                </Icon>
                <DeseaseTitle>{data.disease}</DeseaseTitle>
              </DeseaseName>
              <DiaryDetails data={data} />
            </HealthReport>
          </DiariesContainer>
        ))
      ) : (
        <p>기록이 없습니다.(임시작성된 메시지)</p>
      )}
    </HealthDiaryContainer>
  );
};

export default HealthDiary;
