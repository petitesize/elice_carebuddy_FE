import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_URL, UPLOADED_IMG_URL } from '../../constants/constants';
import { ImageFormData } from '../../components/diary/PetProfileCards';

import cameraIcon from '../../assets/camera.png';

// 컴포넌트
import Button from '../../components/baseComponent/Button';
import InputBox from '../../components/baseComponent/InputBox';
// import PetProfileContainer from '../../components/petregister/PetProfileContainer';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PetProfileImg = styled.img`
  width: 150px;
  height: 150px;
  background: rgba(152, 185, 156, 0.3);
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  object-fit: cover;
`;

const UploadButton = styled.label`
  cursor: pointer;
  position: relative;
  bottom: -50px;
  right: 35px;
`;

const CameraIcon = styled.img`
  width: 32px;
  height: 30px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid #6d987a;
  padding: 2px;
`;

const HiddenInput = styled.input`
  display: none;
`;

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
interface ModalProps {
  recordId: string;
  onSubmit: (formData: FormData) => void;
  onSubmitImage: (imageData: ImageFormData) => void;
}

interface FormData {
  //다 필수값이므로 나중에 물음표 제거
  userId?: string | null;
  name?: string | null;
  kind?: string | null;
  age?: number | null;
  gender?: string | null;
  weight?: number | null;
  isNeutered?: Date | null;
}

const PetEdit: React.FC<ModalProps> = ({
  onSubmit,
  onSubmitImage,
  recordId,
}) => {
  const [uploadedImg, setUploadedImg] = useState<string | null>(null); // 업로드된 이미지(프론트에서 보여주는 용도)
  const [imageFormData, setImageFormData] = useState<ImageFormData>({
    // 백으로 보내줄 이미지 파일
    buddyImage: null,
  });
  const [neutered, setNeutered] = useState(''); // 중성화 여부 선택 상태

  const [formData, setFormData] = useState({
    userId: '',
    name: '',
    kind: '',
    age: 0,
    sex: '',
    weight: 0,
    isNeutered: null,
  });

  useEffect(() => {
    // 현재 반려동물 정보 불러오기
    const fetchDefaultBuddy = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy/${recordId}`);
        const formData = response.data.message[0];
        setFormData(formData);

        console.log('동물 정보 불러오기 성공');
      } catch (error) {
        console.error('동물 정보 불러오기 실패', error);
      }
    };
    fetchDefaultBuddy();
  }, [recordId]);

  useEffect(() => {
    // 부모 컴포넌트에서 이미지를 POST 하기 위해 imageData 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmit(formData);
  }, [formData]);

  useEffect(() => {
    // 부모 컴포넌트에서 이미지를 POST 하기 위해 imageData 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmitImage(imageFormData);
  }, [imageFormData]);

  const handleUploadButtonClick = () => {
    // 파일 업로드를 위한 input 요소를 동적으로 생성하고 클릭 이벤트를 발생시킵니다.
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile); // 프론트에서 보여줄 것
        setUploadedImg(imageUrl);

        const ImageFormData = new FormData(); // 백에 보낼 것
        ImageFormData.append('buddyImage', selectedFile);
        setImageFormData(ImageFormData);
      }
    };
    input.click();
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, age: value });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, weight: value });
  };

  const handleNeuteredClick = (selectedNeutered: string) => {
    if (selectedNeutered === 'no') {
      const currentDate = new Date();
      setNeutered(selectedNeutered);
      setFormData((prevState) => ({
        ...prevState,
        isNeutered: currentDate,
      }));
    } else if (selectedNeutered === 'yes') {
      setNeutered(selectedNeutered);
    }
  };

  return (
    <Profile>
      <Section>
        <h2>프로필 등록</h2>
        <Container>
          <PetProfileImg
            src={
              uploadedImg
                ? uploadedImg
                : `${UPLOADED_IMG_URL}public/defaultbuddyImage.png`
            }
            alt=""
          />
          {/* 이미지 경로 다시 체크해야할듯 */}
          <UploadButton onClick={handleUploadButtonClick}>
            <CameraIcon src={cameraIcon} alt="Camera Icon" />
          </UploadButton>
          <HiddenInput id="upload-input" type="file" accept="image/*" />
        </Container>
      </Section>
      <Section>
        <h2>반려동물 이름</h2>
        <InputBox
          placeholder="이름을 입력해주세요"
          fontSize="md-1"
          value={formData?.name}
          preventClick={true}
        />
      </Section>
      <Section>
        <h2>반려동물 성별</h2>
        <ButtonBox>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={formData?.sex === 0 ? 'primary' : ''}
            // onClick={() => handleGenderClick('female')} // 여자 아이 버튼 클릭 시
            preventClick={true}
          >
            여자 아이
          </Button>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={formData?.sex === 1 ? 'primary' : ''}
            preventClick={true}
          >
            남자 아이
          </Button>
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 종</h2>
        <InputBox
          placeholder="종을 입력해주세요 (ex: 말티즈)"
          fontSize="md-1"
          value={formData?.kind}
          preventClick={true}
        />
      </Section>
      <Section>
        <h2>반려동물 나이</h2>
        <InputBox
          placeholder="나이를 입력해주세요"
          type="number"
          fontSize="md-1"
          onChange={handleAgeChange}
          value={formData?.age}
        />
      </Section>
      <Section>
        <h2>중성화 여부</h2>
        <ButtonBox>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={formData?.isNeutered !== 'yes' ? 'primary' : 'secondary'}
            onClick={() => hndleNeuteredClick('yes')} // 중성화 전 버튼 클릭 시
          >
            중성화 전
          </Button>
          <Button
            padding="20px 20px"
            margin="0 20px 0 0"
            type="number"
            variant={formData?.isNeutered === 'no' ? 'primary' : 'secondary'}
            onClick={() => handleNeuteredClick('no')} // 중성화 완료 버튼 클릭 시
          >
            중성화 완료
          </Button>
        </ButtonBox>
      </Section>
      <Section>
        <h2>반려동물 체중</h2>
        <InputBox
          placeholder="체중을 입력해주세요(kg)"
          type="number"
          fontSize="md-1"
          onChange={handleWeightChange}
          value={formData?.weight}
        />
      </Section>
    </Profile>
  );
};

export default PetEdit;
