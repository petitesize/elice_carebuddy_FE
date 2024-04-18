import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

const HiddenInput = styled.input`
  display: none;
`;

interface PetProfileContainerProps {
  profileImage: string | null;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PetProfileContainer: React.FC<PetProfileContainerProps> = ({ profileImage, handleImageUpload }) => {
  return (
    <Container>
      <PetProfileImg src={profileImage || undefined} />
      <UploadButton htmlFor="upload-input">프로필 사진 업로드하기</UploadButton>
      <HiddenInput id="upload-input" type="file" accept="image/*" onChange={handleImageUpload} />
    </Container>
  );
};

export default PetProfileContainer;