import React, { useState } from 'react';
import styled from 'styled-components';
import imgSrc from '../../assets/withDraw.png';
import SmallModal from '../../components/baseComponent/SmallModal';
import UserTrue from './UserTrue';
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
  margin: 20px;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const WithdrawButton = styled.a`
  cursor: pointer;
  font-size: var(--font-size-ft-1);
`;

interface ModalProps {
  onClose: () => void;
}

const UserAsk: React.FC<ModalProps> = ({ onClose }) => {
  const [showUserAskModal, setShowUserAskModal] = useState(true);
  const [showUserTrueModal, setShowUserTrueModal] = useState(false);

  const handleToggleUserTrueModal = () => {
    setShowUserAskModal(!showUserAskModal);
    setShowUserTrueModal(!showUserTrueModal);
  };

  const handleUserTrueClose = () => {
    setShowUserAskModal(false);
  };

  const handleKeepMembership = () => {
    onClose();
  };

  return (
    <>
      {showUserAskModal && (
        <Container>
          <Logo src={imgSrc} />
          <Title>정말 탈퇴하시겠습니까?</Title>
          <Text>
            지금까지 저장되었던 아이들의 프로필과<br />
            소중한 건강체크 기록이 모두 삭제되며 <br />
            재가입해도 복구가 어려워요.
          </Text>
          <ButtonContainer>
            <Button onClick={handleKeepMembership} variant="primary" fontSize="ft-1" margin="10px" padding="0 40px">
              계속 회원을 유지할래요
            </Button>
            <WithdrawButton onClick={handleToggleUserTrueModal} onclose={handleUserTrueClose}>탈퇴하기</WithdrawButton>
          </ButtonContainer>
        </Container>
      )}
      {showUserTrueModal && (
        <SmallModal
          component={<UserTrue onClose={onClose} />}
          onClose={handleUserTrueClose}
        />
      )}
    </>
  );
};

export default UserAsk;
