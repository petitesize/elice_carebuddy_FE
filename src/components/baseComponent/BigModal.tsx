import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  width: 1024px;
  max-height: 80vh;
  background-color: var(--color-white);
  border-radius: 7px;
  border: 1px solid var(--color-grey2);
  border-top: 20px solid #6d987a;
  padding: 20px 30px;
  margin-bottom: 20px;
  display: flex;
  z-index: 10000;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Container = styled.div`
  padding: 10px 0 20px 0;
`;

const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-1); //20
  color: var(--color-green-main);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-grey-2);
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

interface ModalProps {
  onClose: () => void;
  component: ReactNode;
  title: string;
  value: string;
}

const BigModal: React.FC<ModalProps> = ({
  title,
  value,
  onClose,
  component: Component,
}) => {
  document.body.style.overflow = 'hidden'; // 모달 열렸을 때 배경 스크롤 막음

  const handleModalBackgroundClick = () => {
    onClose(); // 모달 닫기 함수 호출
  };

  return (
    <ModalBackground onClick={handleModalBackgroundClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          <Title>{title}</Title>
          {Component}
          <ButtonContainer>
            <Button
              variant="primary"
              fontSize="ft-1"
              padding="0 20px"
              margin="0 10px 0 0"
            >
              {value}
            </Button>
            <Button
              fontSize="ft-1"
              padding="0 20px"
              onClick={handleModalBackgroundClick}
            >
              취소
            </Button>
          </ButtonContainer>
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default BigModal;
