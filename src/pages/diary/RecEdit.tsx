import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputBox from '../../components/baseComponent/InputBox';
import RadioBox from '../../components/baseComponent/RadioBox';
import TextArea from '../../components/baseComponent/TextArea';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: auto;
  border-bottom: 1px solid var(--color-grey-2);
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ContentTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-1); //16
`;

const ContentBody = styled.div`
  font-size: var(--font-size-md-1); //16
  margin-top: 10px;
`;

interface ModalProps {
  onClose?: () => void;
  onSubmit: (formData: FormData) => void;
  recordId: string | null; // recordId 추가
}

interface FormData {
  doctorName?: string | null;
  address?: string | null;
  consultationDate?: string | Date | null;
  disease?: string | null;
  hospitalizationStatus?: Date | null;
  symptom?: string | null;
  treatment?: string | null;
  memo?: string | null;
}

const RecEdit: React.FC<ModalProps> = ({ onSubmit, recordId }) => {
  // const [showRecMadeModal, setShowRecMadeModal] = useState(true); // build 수정
  const showRecMadeModal = true;
  const [defaultFormData, setDefaultFormData] = useState<FormData | null>(null);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [selectedOption, setSelectedOption] = useState<string>(); // 선택된 값 상태

  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    const fetchRecordData = async () => {
      if (!recordId) return; // id가 없으면 종료
      try {
        const response = await axios.get(`${API_URL}hospital/${recordId}`);
        const responseData = response.data.message;
        if (responseData && responseData.length > 0) {
          const defaultFormData = responseData[0];
          setDefaultFormData(defaultFormData);
          setSelectedOption(
            defaultFormData.hospitalizationStatus === null ? '아니오' : '네',
          );
        } else {
          console.error('No data received from the server');
        }
      } catch (error) {
        console.error('Error fetching record data:', error);
      }
    };

    fetchRecordData();
  }, [recordId]); // recordId가 변경될 때마다 실행

  useEffect(() => {
    // 부모 컴포넌트에서 POST를 하기 위해 formData가 변경될 때마다 부모 컴포넌트로 데이터를 전송
    if (formData) {
      onSubmit(formData); // formData가 존재할 때만 onSubmit 호출
    }
  }, [formData]);

  // 선생님 성함 등 input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  // 날짜 및 시간: 각 input 변경될 때마다 합쳐서 진료 날짜를 업데이트 해줌
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDate(value);
    setFormData({ ...formData, consultationDate: `${value} ${time}` });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTime(value);
    setFormData({ ...formData, consultationDate: `${date} ${value}` });
  };

  const handleRadioChange = (value: string) => {
    console.log(value);
    setFormData({
      ...formData,
      hospitalizationStatus: value === '네' ? new Date() : null, // 여기서 타입 오류가 왜 나는지?
    });
  };

  return (
    <>
      {showRecMadeModal && (
        <Component>
          <Container>
            <ContentCard>
              <Content>
                <ContentTitle>
                  예약하신 수의사 선생님 성함을 입력하여주세요.
                </ContentTitle>
                <ContentBody>
                  <InputBox
                    height="20px"
                    defaultValue={defaultFormData?.doctorName}
                    name="doctorName"
                    value={formData?.doctorName}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>상담 날짜와 시간을 체크하여주세요.</ContentTitle>
                <ContentBody>
                  <InputBox
                    type="date"
                    width="180px"
                    height="20px"
                    margin="0 10px 0 0"
                    value={date}
                    onChange={handleDateChange}
                  />
                  <InputBox
                    type="time"
                    width="180px"
                    height="20px"
                    margin="0 10px 0 0"
                    value={time}
                    onChange={handleTimeChange}
                  />
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>병원 이름</ContentTitle>
                <ContentBody>
                  <InputBox
                    name="address"
                    height="20px"
                    defaultValue={defaultFormData?.address}
                    value={formData?.address}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>입원 여부</ContentTitle>
                <ContentBody>
                  <RadioBox
                    labelText="네"
                    value="네"
                    checked={selectedOption === '네'}
                    onChange={(value) => {
                      handleRadioChange(value);
                      setSelectedOption(value); // 선택된 값으로 업데이트
                    }}
                  />
                  <RadioBox
                    labelText="아니오"
                    value="아니오" // "아니오"를 false로 설정
                    checked={selectedOption === '아니오'}
                    onChange={(value) => {
                      handleRadioChange(value);
                      setSelectedOption(value); // 선택된 값으로 업데이트
                    }}
                  />
                </ContentBody>
              </Content>
            </ContentCard>
          </Container>

          <Container>
            <ContentCard>
              <Content>
                <ContentTitle>질병</ContentTitle>
                <ContentBody>
                  <InputBox
                    height="20px"
                    placeholder="입력하여주세요."
                    defaultValue={defaultFormData?.disease}
                    name="disease"
                    value={formData?.disease}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
            </ContentCard>
          </Container>

          <Container>
            <ContentCard>
              <Content>
                <ContentTitle>증상</ContentTitle>
                <ContentBody>
                  <TextArea
                    width="870px"
                    height="100px"
                    placeholder="입력하여주세요."
                    defaultValue={defaultFormData?.symptom}
                    name="symptom"
                    value={formData?.symptom}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
            </ContentCard>
          </Container>

          <Container>
            <ContentCard>
              <Content>
                <ContentTitle>치료</ContentTitle>
                <ContentBody>
                  <TextArea
                    width="870px"
                    height="100px"
                    placeholder="입력하여주세요."
                    defaultValue={defaultFormData?.treatment}
                    name="treatment"
                    value={formData?.treatment}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
            </ContentCard>
          </Container>

          <Container>
            <ContentCard>
              <Content>
                <ContentTitle>메모</ContentTitle>
                <ContentBody>
                  <TextArea
                    width="870px"
                    height="100px"
                    placeholder="입력하여주세요."
                    defaultValue={defaultFormData?.memo}
                    name="memo"
                    value={formData?.memo}
                    onChange={handleInputChange}
                  />
                </ContentBody>
              </Content>
            </ContentCard>
          </Container>
        </Component>
      )}
    </>
  );
};

export default RecEdit;
