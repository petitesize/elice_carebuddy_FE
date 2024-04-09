import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-2);
  padding: 10px;
`;

const BoxTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-1); //20
  padding: 10px;
`

const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-1); //20
  color: var(--color-green-main);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-grey-2);
`
const ContentTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
`

const ContentBody = styled.div`
  font-size: var(--font-size-md-1); //16
`

const ButtonContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.input`

`;

interface ModalProps {
  onClose: () => void;
}

const RecMade: React.FC<ModalProps> = ({ onClose }) => {
  const [showRecMadeModal, setShowRecMadeModal] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      {showRecMadeModal && (
        <Container>
          <Title>병원기록</Title>
          <Box>
            <BoxTitle>진단</BoxTitle>
            <ContentCard>
              <Content>
                <ContentTitle>진단 확인 여부</ContentTitle>
                <ContentBody>
                <Checkbox type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                의료진에 진단 받은 기록이 있습니다.
                </ContentBody>
              </Content>
              <Content>
                <ContentTitle>예약하신 수의사 선생님 성함을 입력하여주세요.</ContentTitle>
                <ContentBody>인풋 박스 들어갈거에용</ContentBody>
              </Content>
            </ContentCard>
          </Box>
          <ButtonContainer>
            <Button variant="primary" fontSize="ft-1">등록</Button>
            <Button fontSize="ft-1">취소</Button>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default RecMade;
