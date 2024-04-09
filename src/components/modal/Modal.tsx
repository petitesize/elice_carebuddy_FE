import styled from 'styled-components';

// 모달 배경
const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 본체
const ModalView = styled.div`
  background-color: white;
  width: 1720px;
  border-radius: 10px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.15);
`;

// 모달 상단 컴포넌트
const ModalTopBar = styled.div`
  height: 15px;
  background-color: #6D987A;
`;

const Modal = ({ children }) => {
    return (
      <ModalBackdrop>
        <ModalView>
          <ModalTopBar />
          {children}
        </ModalView>
      </ModalBackdrop>
    );
  };
  
  export default Modal;