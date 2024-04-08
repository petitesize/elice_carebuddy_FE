import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 20px 0;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 20px;
`;

const List = styled.span`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
  margin: 0 10px 10px 0;
`;

const Line = styled.hr`
  border: 1px solid #cecece;
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
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DataList = styled.div`
  display: flex;
  justify-content: flex-end
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly
`

const InputBox = styled.input`
  padding: 10px 10px 10px 0;
  width: 100%;
  border: 1px solid #cecece;
  margin: 0 10px 10px 0;
`

const SaveButton = styled.button`
  height: 36px;
  padding: 10px 20px;
  background-color: #6D987A;
  color: #ffffff;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const InputList = styled.span`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nickName, setNickName] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
    }
  };

  const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduction(event.target.value);
  };

  const handleSave = () => {
    const user = {
      nickName: nickName,
      introduction: introduction
    };
  };

  return (
    <Container>
      <Menu>
        <Item>프로필</Item>
        <Line />
      </Menu>
      <UserContainer>

        <ImgContainer>
          <PetProfileImg src={profileImage || undefined} />
          <UploadButton htmlFor="upload-input">프로필 사진 업로드하기</UploadButton>
          <HiddenInput id="upload-input" type="file" accept="image/*" onChange={handleImageUpload} />
        </ImgContainer>

        <Info>
        <InputContainer>
          <List>
            <Item>닉네임</Item>
            <Item>소개</Item>
          </List>
          <InputList>
            <InputBox type="text" value={nickName} onChange={handleNickNameChange} placeholder="닉네임 입력" />
            <InputBox type="text" value={introduction} onChange={handleIntroductionChange} placeholder="소개 입력" />
          </InputList>
        </InputContainer>
          <DataList>
            <SaveButton onClick={handleSave}>저장하기</SaveButton>
          </DataList>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;
