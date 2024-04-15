import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from '../../components/baseComponent/InputBox';
import RadioBox from '../../components/baseComponent/RadioBox';
import TextArea from '../../components/baseComponent/TextArea';
import { userState } from '../../recoil/atoms';

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

  const [formData, setFormData] = useState({
    // userId: '6617b4493122a35bf1a26f8d',
    // buddyId: '6617b4603122a35bf1a26f8f',
    doctorName: null,
    address: null,
    consultationDate: null,
    disease: null,
    hospitalizationStatus: null,
    symptom: null,
    treatment: null,
    memo: null,
  });

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

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
                  />
                  <InputBox
                    type="time"
                    width="180px"
                    height="20px"
                    margin="0 10px 0 0"
                  />
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>병원 이름</ContentTitle>
                <ContentBody>
                  <InputBox height="20px" />
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>입원 여부</ContentTitle>
                <ContentBody>
                  <RadioBox labelText="네" />
                  <RadioBox labelText="아니오" />
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
