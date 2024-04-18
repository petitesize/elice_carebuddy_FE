// 페이지 수정 중
// (1) API 테스트 후 이미지 업로드 (2) 프로필 수정하기(원래 닉네임, 소개글 디폴트로 들어있게끔 하기)
// 프로필 수정 -> user 데이터가 렌더링 된 후에 페이지가 렌더링 된다면 안정적 but 지금은 불안정.. 수정해야함
// +) 소개글 수정 API 역시 불안정한 상태 ! 
// 세 개 다 완료한 이후 프로필 이미지도 그대로 불러올 수 있도록 하기

import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button';
import InputBox from '../../components/baseComponent/InputBox';
import TextArea from '../baseComponent/TextArea';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';
import LinkButton from '../baseComponent/LinkButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: var(--font-size-md-1); //16
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 30px 0;
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
  // display: none;
  background-color: red;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DataList = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputList = styled.span`
  display: flex;
`;

const InputContainer = styled.div`
  //display: flex;
  //align-items: center;
  //width: 100%;
`;

const ErrorText = styled.a`
  color: red;
  font-size: 14px;
  margin-top: 5px; /* 빨간 글씨와 닉네임 입력창 사이의 여백 조정 */
`;

const ErrorBox = styled.div`
  padding-left: 74px;
`;

//임시로 추가한 이미지박스
const ImageBox = styled.div`
  padding: 10px;
  // border: 1px solid var(--color-grey-2); /* 테두리는 추후 선택하기 */
  border: none;
  border-radius: 100%;
  height: 140px;
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden; /* 이미지가 부모요소 안에 보이게 */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 */
    position: absolute; /* 이미지가 부모 요소를 기준으로 위치 */
    top: 0;
    left: 0;
  }
`;

const Profile: React.FC = () => {
  const [user] = useRecoilState(userState);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null); // 업로드된 이미지
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [newNickName, setNewNickName] = useState<string>(user?.nickName); // 기존 값을 받아서 수정
  const [newIntroduce, setNewIntroduce] = useState<string>(user?.introduce); // 기존 값을 받아서 수정
  const [errorText, setErrorText] = useState<string>('');

  const handleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setNewNickName(newName); // 입력값을 상태에 반영

    // 길이가 유효하지 않은 경우에만 에러 메시지 표시
    if (newName.length < 2 || newName.length > 10) {
      setErrorText('닉네임은 2자 이상, 10자 이하로 입력해주세요.');
    } else {
      setErrorText(''); // 유효한 길이일 경우 에러 메시지 제거
    }
  };

  const handleIntroductionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewIntroduce(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (!newNickName) {
        setErrorText('닉네임을 입력해주세요');
        return;
      }
      // 닉네임, 소개글 수정
      await axios.put(`${API_URL}users/${user._id}`, {
        "nickName": newNickName,
        introduce: newIntroduce,
      });
      alert('수정되었습니다.'); // 수정 완료 시 알림창 띄우기
      console.log('저장되었습니다.');
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('저장 중 오류가 발생했습니다.', error);
    }

    // 프로필 사진 수정
    await axios.post(`${API_URL}users/`)
  };

  // 원래 handleImageUpload
  // const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     const imageUrl = URL.createObjectURL(selectedFile);
  //     setProfileImage(imageUrl);
  //   }
  // };

  // 이미지 업로드(프론트 코드, 모달 내에서 이미지 업로드하고 보여주기) -> postCreate 이미지 업로드 코드
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile); // 프론트에 업로드
        setUploadedImg(imageUrl);

        const ImageFormData = new FormData(); // 백에 업로드
        ImageFormData.append('postImage', selectedFile);
        setImageFormData(ImageFormData);
      }
    };
    input.click();
  };

   // 이미지 업로드 + 미리보기 참고하려고 가져온 것
  //   <ImageBox hasImage={!!uploadedImg}>
  //   {uploadedImg && <img src={uploadedImg} alt="Uploaded" />}
  // </ImageBox>

  // const ImageBox = styled.div<{ hasImage: boolean }>`
  // padding: 10px;
  // border: 1px dashed var(--color-grey-2);
  // border-radius: 10px;
  // height: 140px;
  // width: 100%;
  // margin: 0;
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // overflow-x: auto;
  // white-space: nowrap;
  // position: relative;

  // img {
  //   max-width: 100%;
  //   max-height: 80%;
  //   object-fit: cover;
  //   position: absolute;
  // }
  // `;

  return (
    <Container>
      <Menu>
        <Item>프로필 수정하기</Item>
      </Menu>
      <UserContainer>
        <ImgContainer>
          <ImageBox>
            {uploadedImg && <img src={uploadedImg} alt="Uploaded" />}
          </ImageBox>
          <LinkButton
            onClick={handleImageUpload}
            text="프로필 사진 업로드 하기"
          />

          {/* <PetProfileImg src={profileImage || undefined} /> */}
          {/* <UploadButton htmlFor="upload-input">
            프로필 사진 업로드하기
          </UploadButton> */}
          {/* <HiddenInput
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          /> */}
        </ImgContainer>
        <Info>
          <InputContainer>
            <InputList>
              <List>
                <ListItem>닉네임</ListItem>
              </List>
              <InputBox
                margin="10px"
                placeholder="닉네임을 입력해주세요."
                value={newNickName}
                onChange={handleNickNameChange}
              ></InputBox>
            </InputList>
            <ErrorBox>
              {errorText && <ErrorText>{errorText}</ErrorText>}
            </ErrorBox>
            <InputList>
              <List>
                <ListItem>소개글</ListItem>
              </List>
              <TextArea
                margin="10px"
                placeholder="소개글을 입력해주세요."
                value={newIntroduce}
                onChange={handleIntroductionChange}
              />
            </InputList>
          </InputContainer>
          <DataList>
            <Button    onClick={handleSave}
          
              variant="primary"
              shape="round"
              fontSize="md-1"
              padding="10px 20px"
              margin="0 10px 0 0"
            >
              저장하기
            </Button>
          </DataList>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;
