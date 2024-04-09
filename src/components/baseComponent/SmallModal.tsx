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
  width: 400px;
  height: auto;
  background-color: white;
  border-radius: 7px;
  border: 1px solid #cecece;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ModalProps {
  onClose: () => void;
  component: ReactNode;
}

const SmallModal: React.FC<ModalProps> = ({ onClose, component:Component }) => {

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          {Component}
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default SmallModal;
