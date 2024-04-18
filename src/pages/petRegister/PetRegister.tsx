import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

// 컴포넌트
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import BasedSelect from '../../components/baseComponent/Select';
import InputBox from '../../components/baseComponent/InputBox';
import ButtonGroup from '../../components/petregister/ButtonGroup';
import PetProfileContainer from '../../components/petregister/PetProfileContainer';

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
  margin: 20px 0 20px 0;

  h2 {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #6D987A;
    margin: 30px 0 30px 0;
  }
`;

const PetSpecies = styled.div`
  display: flex;
`;

const SpeciesOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ModalContent = () => {
  const [profileImage, setProfileImage] = useState('defaultImg.png');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState(0);
  const [petSex, setPetSex] = useState(0); // 1: 남자, 2: 여자로 가정
  const [petKind, setPetKind] = useState('');
  const [petWeight, setPetWeight] = useState(0);
  const [neuteredStatus, setNeuteredStatus] = useState(''); // neutered 상태

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleNeuteredClick = (status) => {
    setNeuteredStatus(status);
  };

  const neuteredButtons = [
    { id: 'neutered', onClick: () => handleNeuteredClick('neutered'), variant: neuteredStatus === 'neutered' ? 'primary' : '', text: '중성화 전' },
    { id: 'spayed', onClick: () => handleNeuteredClick('spayed'), variant: neuteredStatus === 'spayed' ? 'primary' : '', text: '중성화 완료' }
  ];

  const handleClick = (type) => {
    // 성별 버튼 클릭 핸들러
    const sexMap = { 'man': 1, 'woman': 2 };
    console.log(`${type} 버튼이 클릭되었습니다.`);
    setPetSex(sexMap[type]);
  };

  const genderButtons = [
    { id: 'man', onClick: () => handleClick('man'), variant: petSex === 1 ? 'primary' : '', shape: 'square', text: '남자 아이' },
    { id: 'woman', onClick: () => handleClick('woman'), variant: petSex === 2 ? 'primary' : '', shape: 'square', text: '여자 아이' }
  ];

  const handleSubmit = async () => {
    // 선택된 품종의 label을 찾습니다.
    let selectedKindLabel = '';
    if (selectedSpecies === 'dog') {
      const selectedOption = petOptions.find(option => option.label === petKind);
      selectedKindLabel = selectedOption ? selectedOption.label : '';
    } else if (selectedSpecies === 'cat') {
      const selectedOption = petOptions1.find(option => option.label === petKind);
      selectedKindLabel = selectedOption ? selectedOption.label : '';
    }

    const buddyData = {
      categoryId: "66137947b044c8befc0db62b", // 예시로 고정된 값 사용
      userId: "6613950499ef1e7357e4180e", // 예시로 고정된 값 사용
      name: petName,
      profileImage: profileImage, // 실제 사용 시 파일 업로드 후 받은 URL 사용
      age: petAge,
      sex: petSex,
      kind: selectedKindLabel,
      weight: petWeight,
      neutered: neuteredStatus
    };

    try {
      await axios.post(`${API_URL}buddy`, buddyData);
      console.log('반려동물 정보가 성공적으로 등록되었습니다:', buddyData);
      alert('반려동물이 성공적으로 등록되었습니다.');
    } catch (error) {
      alert('반려동물 등록에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <Profile>
      <Section>
        <h2>프로필 등록</h2>
        <PetProfileContainer profileImage={profileImage} handleImageUpload={handleImageUpload} />
      </Section>
      <Section>
        <h2>반려동물 이름</h2>
        <InputBox value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="이름을 입력해주세요" fontSize='md-1'/>
      </Section>
      <Section>
        <h2>반려동물 성별</h2>
        <ButtonBox>
          {genderButtons.map((button) => (
            <Button key={button.id} padding="20px 20px" margin="0 20px 0 0" variant={button.variant} onClick={button.onClick} type="number" >{button.text}</Button>
          ))}
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 종</h2>
        <PetSpecies>
          <SpeciesOption>
            <InputBox placeholder='종을 입력해주세요 (ex: 말티즈)' fontSize='md-1'/>
          </SpeciesOption>
        </PetSpecies>
      </Section>
      <Section>
        <h2>반려동물 나이</h2>
        <InputBox value={petAge} onChange={(e) => setPetAge(Number(e.target.value))} placeholder="나이를 입력해주세요" type="number" fontSize='md-1'  />
      </Section>
      <Section>
        <h2>중성화 여부</h2>
        <ButtonBox>
          {neuteredButtons.map((button) => (
            <Button key={button.id} padding="20px 20px" margin="0 20px 0 0" variant={button.variant} onClick={button.onClick} type="number" fontSize='md-1'>{button.text}</Button>
          ))}
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 체중</h2>
        <InputBox value={petWeight} onChange={(e) => setPetWeight(Number(e.target.value))} placeholder="체중을 입력해주세요(kg)" type="number" fontSize='md-1' />
      </Section>
    </Profile>
  );
};

const PetRegisterModal: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
  const [showPetRegisterModal, setshowPetRegisterModal] = useState(true);

  return (
    <>
      {showPetRegisterModal && (
        <BigModal
          title="반려동물 등록"
          value="등록"
          onClose={onClose}
          component={<ModalContent />}
        />
      )}
    </>
  );
};

export default PetRegisterModal;
