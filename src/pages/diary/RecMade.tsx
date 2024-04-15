import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputBox from '../../components/baseComponent/InputBox';
import RadioBox from '../../components/baseComponent/RadioBox';
import TextArea from '../../components/baseComponent/TextArea';
import { userState } from '../../recoil/atoms';
import Button from '../../components/baseComponent/Button';

const ButtonContainer = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;

  width: auto;
  border-bottom: 1px solid var(--color-grey-2);
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  margin: 20px 100px 20px 0;
`;

const ContentTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-1); //16
`;

const ContentBody = styled.div`
  font-size: var(--font-size-md-1); //16
  margin: 10px 0 10px 0;
`;

const Checkbox = styled.input``;

interface ModalProps {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

const RecMade: React.FC<ModalProps> = ({ onClose, onSubmit }) => {
  const [showRecMadeModal, setShowRecMadeModal] = useState(true);
  const [checked, setChecked] = useState(false);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [consultDate, setConsultDate] = useState('');

  const [selectedValue, setSelectedValue] = useState(null); // 초기값을 null로 설정
  const [hospitalizationStatus, setHospitalizationStatus] =
    useState<Date | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('아니오'); // 선택된 값 상태

  const [formData, setFormData] = useState({
    // userId: '6617b4493122a35bf1a26f8d',
    // buddyId: '6617b4603122a35bf1a26f8f',
    doctorName: '',
    address: '',
    consultationDate: '',
    disease: '',
    hospitalizationStatus: null,
    symptom: '',
    treatment: '',
    memo: '',
  });

  useEffect(() => {
    // 부모 컴포넌트에서 POST를 하기 위해 formData가 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmit(formData);
  }, [formData]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleRadioChange = (value: string) => {
    console.log(value);
    setFormData({
      ...formData,
      hospitalizationStatus: value === '네' ? new Date() : null,
    });
  };

  // 선생님 성함
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

  // const handleSubmit = () => {
  //   // 폼 데이터를 부모 컴포넌트로 전송
  //   onSubmit(formData);
  // };

  // const handleModalBackgroundClick = () => {
  //   onClose(); // 모달 닫기 함수 호출
  // };

  return (
    <>
      {showRecMadeModal && (
        <Component>
          <Container>
            <BoxTitle>진단</BoxTitle>
            <ContentCard>
              <Content>
                <ContentTitle>진단 확인 여부</ContentTitle>
                <ContentBody>
                  <Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                  의료진에 진단 받은 기록이 있습니다.
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>
                  예약하신 수의사 선생님 성함을 입력하여주세요.
                </ContentTitle>
                <ContentBody>
                  <InputBox
                    name="doctorName"
                    height="20px"
                    value={formData.doctorName}
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
                    height="20px"
                    value={formData.address}
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
                  <InputBox height="20px" placeholder="입력하여주세요." />
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
                    width="890px"
                    height="100px"
                    placeholder="입력하여주세요."
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
                    width="890px"
                    height="100px"
                    placeholder="입력하여주세요."
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
                    width="890px"
                    height="100px"
                    placeholder="입력하여주세요."
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

export default RecMade;
