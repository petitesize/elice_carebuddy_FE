import React, { useState } from 'react';
import styled from 'styled-components';
import imgSrc from '../../assets/TrueIcon.png'
import SmallModal from '../../components/modals/SmallModal';
import Button from '../../components/baseComponent/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: var(--font-size-md-1); //16
  padding: 0 10px 10px 10px;
`

const Title = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  padding: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  height: 35px;
`;

interface ModalProps {
  onClose: () => void;
}

const UserTrue: React.FC<ModalProps> = ({ onClose }) => {
  const [showUserTrueModal, setShowUserTrueModal] = useState(false);

  const handleToggleUserTrueModal = () => {
    setShowUserTrueModal(!showUserTrueModal);
  };

  const handleModalClose = () => {
    setShowUserTrueModal(false);
  };

  const handleWithdraw = () => {
    handleToggleUserTrueModal(); // Close the modal
    onClose(); // Close the UserTrue modal
  };

  return (
    <Container>
      <Logo src={imgSrc} />
      <Title>탈퇴 완료</Title>
      <Text>회원님의 탈퇴가 완료되었습니다.<br />
        케어버디를 이용해주셔서 감사합니다.
      </Text>
      <ButtonContainer>
        <Button onClick={handleWithdraw} variant="primary" fontSize="ft-1" padding="0 80px">확인</Button>
        {showUserTrueModal && (
          <SmallModal onClose={handleModalClose} />
        )}
      </ButtonContainer>
    </Container>
  );
};

export default UserTrue;
