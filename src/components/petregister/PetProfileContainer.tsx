import React from 'react';
import styled from 'styled-components';
import cameraIcon from '../../assets/camera.png'; // 카메라 아이콘 이미지 import

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

interface PetProfileContainerProps {
  profileImage: string | null;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PetProfileContainer: React.FC<PetProfileContainerProps> = ({ profileImage, handleImageUpload }) => {
  const handleUploadButtonClick = () => {
    // HiddenInput을 클릭하여 파일 업로드 창을 연다.
    const inputElement = document.getElementById('upload-input');
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <Container>
      <PetProfileImg src={profileImage || undefined} />
      <UploadButton onClick={handleUploadButtonClick}>
        <CameraIcon src={cameraIcon} alt="Camera Icon" />
      </UploadButton>
      <HiddenInput id="upload-input" type="file" accept="image/*" onChange={handleImageUpload} />
    </Container>
  );
};

export default PetProfileContainer;
