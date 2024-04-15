import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BigModal from '../baseComponent/BigModal';
import RecMade from '../../pages/diary/RecMade';
import RecEdit from '../../pages/diary/RecEdit';
import Button from '../baseComponent/Button';
import ActionButton from '../baseComponent/ActionButton';
import { TbBuildingHospital, TbReportMedical } from 'react-icons/tb';
import DiaryDetails from './DiaryDetails';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

// 다 나았는지, 현재 상태를 보여줄 수 있는 것이 추가 구현되면 좋을 듯 함
// 최신 순으로 정렬되는 것 또한 추가 구현되면 좋을 듯 함

interface DiaryProps {
  _id: string;
  consultationDate: string;
  disease: string;
  symptom: string;
  hospitalizationStatus: Date;
  memo: string;
  address: string;
  doctorName: string;
  treatment: string;
}

interface HealthDiaryProps {
  petId?: string;
  petName?: string;
  diaryData: DiaryProps[];
}

const HealthDiary: React.FC<HealthDiaryProps> = ({
  petId,
  petName,
  diaryData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [recordId, setRecordId] = useState<string | null>(null); // id 상태 추가

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  // 삭제 버튼?
  const handleDeleteButtonClick = () => {
    setShowModal(true);
  };

  const handleToggleEditModal = () => {
    // 수정 모달 표시 여부를 관리하는 함수
    setShowEditModal(!showEditModal);
  };

  const handleEditButtonClick = (id: string) => {
    setShowEditModal(true); // 수정하기 버튼 클릭 시 수정 모달 표시
    setRecordId(id);
    console.log(id);
  };

  const handleData = (formData: any) => {
    // RecMade 컴포넌트에서 입력된 데이터를 받아와서 상태에 저장합니다.
    setFormData(formData);
    console.log(formData);
  };

  const formDataForPOST = {
    ...formData,
    userId: useRecoilValue(userState)?._id,
    buddyId: petId,
  };

  const formDataForPUT = {
    ...formData,
  };

  const handleHospitalPost = async () => {
    try {
      const response = await axios.post(`${API_URL}hospital`, formDataForPOST, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('POST 요청 성공:', response.data);
      setShowModal(!showModal);
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  };

  const handleHospitalPut = async () => {
    try {
      const response = await axios.put(
        `${API_URL}hospital/${recordId}`,
        formDataForPUT,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('PUT 요청 성공:', response.data);
      setShowEditModal(!showEditModal);
    } catch (error) {
      console.error('PUT 요청 실패:', error);
    }
  };

  // Date 포맷팅 함수
  const formatDate = (date: Date, includeTime: boolean = false) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    if (includeTime) {
      options.hour = '2-digit';
      options.minute = '2-digit';
      options.hour12 = true;
    }

    return date.toLocaleDateString('ko-KR', options);
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
          component={<RecMade onSubmit={handleData} />}
          onClose={handleToggleModal}
          onHandleClick={handleHospitalPost}
        />
      )}
      {showEditModal && (
        <BigModal
          title="진료 기록 수정"
          value="수정"
          component={<RecEdit onSubmit={handleData} recordId={recordId} />} // 수정 모달을 불러옴
          onClose={handleToggleEditModal}
          onHandleClick={handleHospitalPut}
        />
      )}
      {diaryData.length > 0 ? (
        diaryData.map((data, index) => (
          <DiariesContainer key={index}>
            <p>{formatDate(new Date(data.consultationDate), true)}</p>
            <HealthReport>
              <ActionButton
                onEdit={() => handleEditButtonClick(data._id)}
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
  width: 30%;
  padding-top: 26px;
  padding-right: 20px;
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

export default HealthDiary;
