import React from 'react';
import styled from 'styled-components';
import {
  LuPill,
  LuActivitySquare,
  LuStethoscope,
  LuMessageSquarePlus,
} from 'react-icons/lu';
import { TbBuildingHospital, TbReportMedical } from 'react-icons/tb';

const DiaryDetailsLeft = styled.div`
  display: flex;
  border-left: solid 2px #cecece;
  padding: 26px 4%;
  flex-direction: column;
  width: 35%;
`;

const DiaryDetailsRight = styled.div`
  display: flex;
  padding: 26px 30px;
  flex-direction: column;
  width: 35%;
`;

// 질병에 대한 상세 정보 컨테이너
const DiaryDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DiaryDetail = styled.div`
  margin-left: 15px;
  margin-bottom: 30px;
  margin-right: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.p`
  width: 300px;
  font-weight: var(--font-weight-bold);

  + p {
    font-size: var(--font-size-md-1);
    margin-top: 4px;
    line-height: var(--font-size-hd-2);
    white-space: pre-wrap;

    > span {
      color: #7d7d7d;
    }
  }
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

interface DiaryDetailsProps {
  data: DiaryProps; // DiaryProps는 HealthDiary.tsx 파일에서 정의된 DiaryProps를 가정합니다.
}

const DiaryDetails: React.FC<DiaryDetailsProps> = ({ data }) => {
  return (
    <>
      <DiaryDetailsLeft>
        <DiaryDetailContainer>
          <Icon>
            <LuActivitySquare />
          </Icon>
          <DiaryDetail>
            <DetailTitle>증상</DetailTitle>
            <p>{data.symptom || '증상 기록이 없어요'}</p>
          </DiaryDetail>
        </DiaryDetailContainer>
        <DiaryDetailContainer>
          <Icon>
            <TbBuildingHospital />
          </Icon>
          <DiaryDetail>
            <DetailTitle>입원 여부</DetailTitle>
            <p>
              {data.hospitalizationStatus === null
                ? '입원하지 않았어요'
                : '입원 중이에요'}
            </p>
          </DiaryDetail>
        </DiaryDetailContainer>
        <DiaryDetailContainer>
          <Icon>
            <LuMessageSquarePlus />
          </Icon>
          <DiaryDetail>
            <DetailTitle>보호자 메모</DetailTitle>
            <p>{data.memo || '메모 없음'}</p>
          </DiaryDetail>
        </DiaryDetailContainer>
      </DiaryDetailsLeft>
      <DiaryDetailsRight>
        <DiaryDetailContainer>
          <Icon>
            <LuPill />
          </Icon>
          <DiaryDetail>
            <DetailTitle>처방</DetailTitle>
            <p>{data.treatment || '처방 기록이 없어요'}</p>
          </DiaryDetail>
        </DiaryDetailContainer>
        <DiaryDetailContainer>
          <Icon>
            <LuStethoscope />
          </Icon>
          <DiaryDetail>
            <DetailTitle>동물병원</DetailTitle>
            <p>
              {data.address === null ? '방문 기록이 없어요' : data.address}{' '}
              <span>{data.doctorName && data.doctorName + ' 선생님'} </span>
            </p>
          </DiaryDetail>
        </DiaryDetailContainer>
      </DiaryDetailsRight>
    </>
  );
};

export default DiaryDetails;
