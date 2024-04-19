import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import Button from '../../components/baseComponent/Button';
import InputBox from '../../components/baseComponent/InputBox';
// import PetProfileContainer from '../../components/petregister/PetProfileContainer';

const Section = styled.div`
  font-size: 16px;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 30px 0;

  h2 {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #6d987a;
    margin: 30px 0 30px 0;
  }
`;

const PetRegister: React.FC = () => {
  const [gender, setGender] = useState(''); // 성별 선택 여부 상태
  const [neutered, setNeutered] = useState(''); // 중성화 여부 선택 상태

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender); // 선택된 성별로 상태 업데이트
  };

  const handleNeuteredClick = (selectedNeutered: string) => {
    setNeutered(selectedNeutered); // 선택된 중성화 여부로 상태 업데이트
  };

  return (
    <Profile>
      <Section>
        <h2>프로필 등록</h2>
        <PetProfileContainer />
      </Section>
      <Section>
        <h2>반려동물 이름</h2>
        <InputBox
          placeholder="이름을 입력해주세요"
          fontSize="md-1"
        />
      </Section>
      <Section>
        <h2>반려동물 성별</h2>
        <ButtonBox>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={gender === 'female' ? 'primary' : ''}
            onClick={() => handleGenderClick('female')} // 여자 아이 버튼 클릭 시
          >여자 아이
          </Button>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={gender === 'male' ? 'primary' : ''}
            onClick={() => handleGenderClick('male')} // 남자 아이 버튼 클릭 시
          >남자 아이
          </Button>
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 종</h2>
        <InputBox
          placeholder="종을 입력해주세요 (ex: 말티즈)"
          fontSize="md-1"
        />
      </Section>
      <Section>
        <h2>반려동물 나이</h2>
        <InputBox
          placeholder="나이를 입력해주세요"
          type="number"
          fontSize="md-1"
        />
      </Section>
      <Section>
        <h2>중성화 여부</h2>
        <ButtonBox>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={neutered === 'yes' ? 'primary' : ''}
            onClick={() => handleNeuteredClick('yes')} // 중성화 전 버튼 클릭 시
          >중성화 전
          </Button>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={neutered === 'no' ? 'primary' : ''}
            onClick={() => handleNeuteredClick('no')} // 중성화 완료 버튼 클릭 시
          >중성화 완료
          </Button>
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 체중</h2>
        <InputBox
          placeholder="체중을 입력해주세요(kg)"
          type="number"
          fontSize="md-1"
        />
      </Section>
    </Profile>
  );
};

export default PetRegister;
