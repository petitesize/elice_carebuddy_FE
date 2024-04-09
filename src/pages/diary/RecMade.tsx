import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey-2);
`;

const BoxTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-1); //20
`

const ContentTitle = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
`

const ContentBody = styled.div`
  font-size: var(--font-size-md-1); //16
`

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
        </Container>
      )}
    </>
  );
};

export default RecMade;
