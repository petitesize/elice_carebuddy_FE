import React, { ReactNode } from 'react';
import styled from 'styled-components';

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
  height: auto; // auto 수정
  background-color: var(--color-white);
  border-radius: 7px;
  border: 1px solid var(--color-grey2);;
  padding: 30px;
  display: flex;
  z-index: 10000;
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

interface ModalProps {
  onClose: () => void;
  component: ReactNode;
}

const RecordModal: React.FC<ModalProps> = ({ onClose, component: Component }) => {
  const handleModalBackgroundClick = () => {
    onClose(); // 모달 닫기 함수 호출
  };

  return (
    <ModalBackground onClick={handleModalBackgroundClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          {Component}
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default RecordModal;
