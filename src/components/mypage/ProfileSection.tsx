import styled from 'styled-components';
import React, { useState } from 'react';
import Button from '../../components/baseComponent/Button'
import InputBox from '../../components/baseComponent/InputBox'
import TextArea from '../baseComponent/TextArea';
import axios from 'axios';
import { API_URL } from './../../constants/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-hd-2); //22
  border-bottom: 1px solid var(--color-grey-2);
  padding-bottom: 10px;
`;

const List = styled.span`
  display: flex;
  align-items: center;
`;

const Item = styled.a`
  font-weight: var(--font-weight-bold);
`;

const ListItem = styled.a`
  font-weight: var(--font-weight-bold);
  margin: 10px;
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
  justify-content: center;
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

const InputList = styled.span`
  display: flex;
`;

const InputContainer = styled.div`
  //display: flex;
  //align-items: center;
  //width: 100%;
`

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [newNickName, setNewNickName] = useState<string>('');
  const [newIntroduce, setNewIntroduce] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
    }
  };

  const handleNickNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickName(event.target.value);
  };

  const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewIntroduce(event.target.value);
  };

  const handleSave = async () => {
    try {
      await axios.put(`${API_URL}users/6613fbcdfaebdd59e9882df3`, {
        nickName: newNickName,
        introduce: newIntroduce
      });
      console.log('저장되었습니다.');
    } catch (error) {
      console.error('저장 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Container>
      <Menu>
        <Item>프로필 수정하기</Item>
      </Menu>
      <UserContainer>
        <ImgContainer>
          <PetProfileImg src={profileImage || undefined} />
          <UploadButton htmlFor="upload-input">프로필 사진 업로드하기</UploadButton>
          <HiddenInput id="upload-input" type="file" accept="image/*" onChange={handleImageUpload} />
        </ImgContainer>
        <Info>
          <InputContainer>
            <InputList>
              <List>
                <ListItem>닉네임</ListItem>
              </List>
              <InputBox margin="10px" placeholder="닉네임을 입력해주세요." value={newNickName} onChange={handleNickNameChange}></InputBox>
            </InputList>
            <InputList>
              <List>
                <ListItem>소개글</ListItem>
              </List>
              <TextArea margin="10px" placeholder="소개글을 입력해주세요." value={newIntroduce} onChange={handleIntroductionChange} />
            </InputList>
          </InputContainer>
          <DataList>
            <Button onClick={handleSave} variant="primary" shape="round" fontSize="md-1" padding="10px 20px" margin="0 10px 0 0">저장하기</Button>
          </DataList>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;
