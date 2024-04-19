import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import styled from 'styled-components';
import imgSrc from '../../assets/withDraw.png';
import SmallModal from '../../components/baseComponent/SmallModal';
import UserTrue from './UserTrue';
import Button from '../../components/baseComponent/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: var(--font-size-md-1); //16
`;

const Title = styled.p`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  padding: 20px;
`;

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
  userId: string; // userId를 props로 받도록 정의
}

const UserAsk: React.FC<ModalProps> = ({ onClose, userId }) => {
  const [showUserAskModal, setShowUserAskModal] = useState(true);
  const [showUserTrueModal, setShowUserTrueModal] = useState(false);

  const handleUserTrueClose = () => {
    setShowUserAskModal(false);
  };

  const handleKeepMembership = () => {
    onClose();
  };

  const handleWithdrawal = async () => {
    setShowUserAskModal(false);
    setShowUserTrueModal(true);
    try {
      // 부모 컴포넌트에서 받은 userId를 사용합니다.
      const response = await axios.put(`${API_URL}users/${userId}/w`);

      // 응답에서 `deletedAt` 값을 확인하여 회원 삭제 여부를 판별합니다.
      if (response.data.deletedAt === null) {
        console.log('회원이 삭제되지 않았습니다.');
      } else {
        console.log('회원이 삭제되었습니다.');
        alert('회원 탈퇴가 완료되었습니다.')
      }
    } catch (error) {
      console.error('에러:', error);
    }
  };

  const handleBackgroundClick = () => {
    setShowUserAskModal(false);
  };

  return (
    <>
      {showUserAskModal && (
        <Container onClick={handleBackgroundClick}>
          <Logo src={imgSrc} />
          <Title>정말 탈퇴하시겠습니까?</Title>
          <Text>
            지금까지 저장되었던 아이들의 프로필과<br />
            소중한 건강체크 기록이 모두 삭제되며 <br />
            재가입해도 복구가 어려워요.
          </Text>
          <ButtonContainer>
            <Button
              onClick={handleKeepMembership}
              variant="primary"
              fontSize="ft-1"
              margin="10px"
              padding="0 40px"
            >
              계속 회원을 유지할래요
            </Button>
            <WithdrawButton onClick={handleWithdrawal}>탈퇴하기</WithdrawButton>
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
