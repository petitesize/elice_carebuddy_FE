import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

// 컴포넌트
import BigModal from '../../components/baseComponent/BigModal';
import BasedSelect from '../../components/baseComponent/Select';
import InputBox from '../../components/baseComponent/InputBox';
import ButtonGroup from '../../components/petregister/ButtonGroup';
import PetProfileContainer from '../../components/petregister/PetProfileContainer';
import RadioBox from '../../components/baseComponent/RadioBox';

const Profile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

const SpeciesOption = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ModalContent = ({ initialData }) => { // initialData는 외부에서 불러온 반려동물의 기존 데이터입니다.
  // 상태 초기값을 기존 데이터로 설정합니다.
  const [petId, setPetId] = useState(initialData._id || '');
  const [profileImage, setProfileImage] = useState(initialData.profileImage || 'defaultImg.png');
  const [selectedSpecies, setSelectedSpecies] = useState(initialData.selectedSpecies || '');
  const [petName, setPetName] = useState(initialData.petName || '');
  const [petAge, setPetAge] = useState(initialData.petAge || 0);
  const [petSex, setPetSex] = useState(initialData.petSex || 0); // 1: 남자, 2: 여자로 가정
  const [petKind, setPetKind] = useState(initialData.petKind || '');
  const [petWeight, setPetWeight] = useState(initialData.petWeight || 0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const petOptions = [
    { value: 'chihuahua', label: '치와와' },
    { value: 'maltese', label: '말티즈' },
  ];

  const petOptions1 = [
    { value: 'ragdoll', label: '랙돌' },
    { value: 'russianblue', label: '러시안블루' },
  ];

  const handleSpeciesSelect = (species) => {
    setSelectedSpecies(species);
  };

  const handleClick = (type) => {
    // 성별 버튼 클릭 핸들러
    const sexMap = { 'man': 1, 'woman': 2 };
    console.log(`${type} 버튼이 클릭되었습니다.`);
    setPetSex(sexMap[type]);
  };

  const genderButtons = [
    { id: 'man', onClick: () => handleClick('man'), variant: 'primary', shape: 'square', text: '남자 아이' },
    { id: 'woman', onClick: () => handleClick('woman'), variant: 'secondary', shape: 'square', text: '여자 아이' }
  ];

    // const handleNeuteredClick = (type) => {
  //   // 중성화 여부 버튼 클릭 핸들러
  //   const neuteredMap = { 'neutered': '중성화 전', 'spayed': '중성화 완료' };
  //   console.log(`${type} 버튼이 클릭되었습니다.`);
  //   setPetNeutered(neuteredMap[type]);
  // };

  // const neuteredButtons = [
  //   { id: 'neutered', onClick: () => handleNeuteredClick('neutered'), variant: 'primary', text: '중성화 전' },
  //   { id: 'spayed', onClick: () => handleNeuteredClick('spayed'), variant: 'secondary', text: '중성화 완료' }
  // ];

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
      name: petName,
      profileImage: profileImage, // 실제 사용 시 파일 업로드 후 받은 URL 사용
      age: petAge,
      sex: petSex,
      kind: petKind,
      weight: petWeight,
      // neutered: petNeutered 등 필요한 데이터 추가
    };
  
    try {
      await axios.put(`${API_URL}api/buddy/${petId}`, buddyData);
      console.log('반려동물 정보가 성공적으로 수정되었습니다:', buddyData);
      alert('반려동물 정보가 성공적으로 수정되었습니다.');
    } catch (error) {
      alert('반려동물 정보 수정에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <Profile>
        <h2>프로필 등록</h2>
        <PetProfileContainer profileImage={profileImage} handleImageUpload={handleImageUpload} />
        <h2>반려동물 이름</h2>
        <InputBox placeholder="이름을 입력해주세요" type="text" />
        <h2>반려동물 종</h2>
        <PetSpecies>
          <SpeciesOption>
            <RadioBox labelText="강아지" onChange={() => handleSpeciesSelect('dog')} checked={selectedSpecies === 'dog'} />
            {selectedSpecies === 'dog' && <BasedSelect options={petOptions} width="120px" borderRadius="0" />}
          </SpeciesOption>
          
          <SpeciesOption>
            <RadioBox labelText="고양이" onChange={() => handleSpeciesSelect('cat')} checked={selectedSpecies === 'cat'} />
            {selectedSpecies === 'cat' && <BasedSelect options={petOptions1} width="120px" borderRadius="0" />}
          </SpeciesOption>
        </PetSpecies>
        <h2>반려동물 나이</h2>
        <InputBox placeholder="나이를 입력해주세요" type="number" />
        <h2>반려동물 성별</h2>
        <ButtonGroup buttons={genderButtons} />
        {/* <h2>중성화 여부</h2>
        <ButtonGroup buttons={neuteredButtons} /> */}
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
