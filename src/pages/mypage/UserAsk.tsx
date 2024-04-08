import React from 'react';
import styled from 'styled-components';
import imgSrc from '../../assets/withDraw.png'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경에 흐릿한 효과 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 최상위로 설정 */
`;

const ModalContent = styled.div`
  position: relative; /* 상대적 위치 설정 */
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid #cecece;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000; /* 최상위로 설정 */
`;


const Text = styled.p`
  text-align: center;
  line-height: 23px;
  font-size: 16px;
  padding: 10px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
`

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
  color: ${(props) => (props.primary ? 'white' : '#343434')}; /* primary 버튼의 글자색을 흰색으로 설정 */
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

interface ModalProps {
  onClose: () => void;
}

const UserTrue: React.FC<ModalProps> = ({ onClose }) => {

  const handleWithdraw = () => {
    alert('탈퇴되었습니다.');
    onClose(); // 현재 모달 닫기
  };

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      <Logo src={imgSrc} />
        <Title>정말 탈퇴하시겠습니까?</Title>
        <Text>지금까지 저장되었던 아이들의 프로필과<br />
        소중한 건강체크 기록이 모두 삭제되며 <br />
        재가입해도 복구가 어려워요.
        </Text>
        <ButtonContainer>
          <Button primary>계속 회원을 유지할래요</Button>
          <Button onClick={handleWithdraw}>탈퇴하기</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>
  );
};

export default UserTrue;
