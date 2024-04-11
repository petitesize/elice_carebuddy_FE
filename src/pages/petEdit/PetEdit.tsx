import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import BigModal from '../../components/baseComponent/BigModal';
import UIButton from '../../components/baseComponent/Button';
import BasedSelect from '../../components/baseComponent/Select';
import Input from '../../components/petregister/Input';
import PetProfileContainer from '../../components/petregister/PetProfileContainer';
import SectionWrapper from '../../components/petregister/SectionWrapper';

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

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
`;

const renderSection = (inputType: 'name' | 'age' | 'weight', title: string, text: string = "") => {
  let placeholder = '';
  switch (inputType) {
    case 'name':
      placeholder = '이름을 입력해주세요';
      break;
    case 'age':
      placeholder = '나이를 입력해주세요';
      break;
    case 'weight':
      placeholder = '체중을 입력해주세요';
      break;
  }

  return (
    <SectionWrapper title={title} text={text}>
      <Input type={inputType === 'name' ? 'text' : 'number'} placeholder={placeholder} />
    </SectionWrapper>
  );
};

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

  return (
    <Profile>
        <h2>프로필 수정</h2>
        <PetProfileContainer src={profileImageUrl} alt={profileImageAlt} />
        {renderSection("name", "반려동물 이름")}
        <h2>반려동물 종</h2>
        <PetSpecies>
          <BasedSelect options={petOptions} width="120px" borderRadius="0" />
          <BasedSelect options={petOptions1} width="120px" borderRadius="0" />
        </PetSpecies>
        {renderSection("age", "반려동물 나이")}
        <h2>반려동물 성별</h2>
        <ButtonGroup>
          <UIButton onClick={() => handleClick('man')} variant='primary' shape='square'>남자 아이</UIButton>
          <UIButton onClick={() => handleClick('woman')} variant='secondary' shape='square'>여자 아이</UIButton>
        </ButtonGroup>
        <h2>중성화 여부</h2>
        <ButtonGroup>
          <UIButton onClick={() => handleClick('neutered')} variant='primary'>중성화 전</UIButton>
          <UIButton onClick={() => handleClick('spayed')} variant='secondary'>중성화 완료</UIButton>
        </ButtonGroup>
        {renderSection("weight", "반려동물 체중")}
    </Profile>
  );
};

interface ModalProps {
  onClose: () => void;
}

const PetEditModal: React.FC<ModalProps> = ({ onClose }) => {
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