import React, { useState } from 'react';
import styled from 'styled-components';
import imgSrc from '../../assets/withDraw.png';
import SmallModal from '../../components/modals/SmallModal';
import UserTrue from './UserTrue';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: 16px;
  padding: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 40px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.primary ? '#6d987a' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#343434')};
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
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
            <Button primary onClick={handleKeepMembership}>
              계속 회원을 유지할래요
            </Button>
            <Button onClick={handleToggleUserTrueModal}>탈퇴하기</Button>
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
