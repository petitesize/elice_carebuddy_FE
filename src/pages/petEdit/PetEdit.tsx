import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import BigModal from '../../components/baseComponent/BigModal';
import BasedSelect from '../../components/baseComponent/Select';
import InputBox from '../../components/baseComponent/InputBox';
import ButtonGroup from '../../components/petregister/ButtonGroup';
import PetProfileContainer from '../../components/petregister/PetProfileContainer';

const Profile = styled.div`
  position: relative;

  h2 {
    font: 700 26px/31px 'Pretendard', sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6D987A;
    margin-bottom: 30px;
    margin-top: 70px;
  }
`;

const PetSpecies = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
`;

const ModalContent = () => {
  const profileImageUrl = "";
  const profileImageAlt = "프로필 이미지";

  const petOptions = [
    { value: 'dog', label: '강아지' },
    { value: 'dog', label: '강아지' },
  ];

  const petOptions1 = [
    { value: 'cat', label: '고양이' },
    { value: 'cat', label: '고양이' },
  ];

  const handleClick = (type: string) => {
    console.log(`${type} 버튼이 클릭되었습니다.`);
  };

  const genderButtons = [
    { id: 'man', onClick: () => handleClick('man'), variant: 'primary', shape: 'square', text: '남자 아이' },
    { id: 'woman', onClick: () => handleClick('woman'), variant: 'secondary', shape: 'square', text: '여자 아이' }
  ];

  const neuteredButtons = [
    { id: 'neutered', onClick: () => handleClick('neutered'), variant: 'primary', text: '중성화 전' },
    { id: 'spayed', onClick: () => handleClick('spayed'), variant: 'secondary', text: '중성화 완료' }
  ];

  return (
    <Profile>
        <h2>프로필 등록</h2>
        <PetProfileContainer src={profileImageUrl} alt={profileImageAlt} />
        <h2>반려동물 이름</h2>
        <InputBox placeholder="이름을 입력해주세요" type="text" />
        <h2>반려동물 종</h2>
        <PetSpecies>
          <BasedSelect options={petOptions} width="120px" borderRadius="0" />
          <BasedSelect options={petOptions1} width="120px" borderRadius="0" />
        </PetSpecies>
        <h2>반려동물 나이</h2>
        <InputBox placeholder="나이를 입력해주세요" type="number" />
        <h2>반려동물 성별</h2>
        <ButtonGroup buttons={genderButtons} />
        <h2>중성화 여부</h2>
        <ButtonGroup buttons={neuteredButtons} />
        <h2>반려동물 체중</h2>
        <InputBox placeholder="체중을 입력해주세요(kg)" type="number" />
    </Profile>
  );
};

const PetEditModal: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
  const [showPetEditModal, setshowPetEditModal] = useState(true);

  return (
    <>
      {showPetEditModal && (
        <BigModal 
          title="반려동물 정보 수정" 
          value="수정" 
          onClose={onClose} 
          component={<ModalContent />} 
        />
      )}
    </>
  );
};

export default PetEditModal;