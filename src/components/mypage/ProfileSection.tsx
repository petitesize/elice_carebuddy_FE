import React, { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../components/baseComponent/Button';
import InputBox from '../../components/baseComponent/InputBox';
import TextArea from '../baseComponent/TextArea';
import axios from 'axios';
import { API_URL, UPLOADED_IMG_URL } from './../../constants/constants';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';
import LinkButton from '../baseComponent/LinkButton';

interface User {
  _id: string;
  email: string;
  nickName: string;
  introduce: string;
  profileImage: string;
}

const Profile: React.FC = () => {
  const [user] = useRecoilState<User>(userState);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null); // 업로드된 이미지
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [newNickName, setNewNickName] = useState<string | null>(null); // useEffect로 기존 값을 받아서 수정
  const [newIntroduce, setNewIntroduce] = useState<string | null>(null); // useEffect로 기존 값을 받아서 수정
  const [errorText, setErrorText] = useState<string>('');
  const [imageFormData, setImageFormData] = useState(null);

  // 현재 유저 기본 정보를 수정 인풋에 채워넣음
  useEffect(() => {
    setNewNickName(user?.nickName);
    setNewIntroduce(user?.introduce);
    setProfileImage(user?.profileImage);
  }, [user]);

  const handleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setNewNickName(newName); // 입력값을 상태에 반영
  };

  const handleIntroductionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newIntroduce = event.target.value;
    setNewIntroduce(newIntroduce); // 입력값을 상태에 반영
  };

  // 닉네임에 대한 유효성 경고
  useEffect(() => {
    // 길이가 유효하지 않은 경우에만 에러 메시지 표시 -> 수정해야함. 지금은 새로 쓴 글자가 두글자일때 막 작동
    if (newNickName?.length < 2 || newNickName?.length > 10) {
      setErrorText('닉네임은 2자 이상, 10자 이하로 입력해주세요.');
    } else {
      setErrorText(''); // 유효한 길이일 경우 에러 메시지 제거
    }
  }, [newNickName]);

  const handleSave = async () => {
    try {
      if (!newNickName) {
        setErrorText('닉네임을 입력해주세요');
        return;
      }

      // 닉네임, 소개글 수정
      const Data = {
        nickName: newNickName,
        introduce: newIntroduce,
      };

      await axios.put(`${API_URL}users/${user?._id}`, Data);
      alert('수정되었습니다.'); // 수정 완료 시 알림창 띄우기

      console.log('소개 수정 성공');
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('소개 수정 실패', error);
    }

    // 프로필 사진 수정
    try {
      await axios.post(
        `${API_URL}users/${user?.email}/profileImage`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('프로필 사진 수정 성공');
    } catch (error) {
      console.error('프로필 사진 수정 실패', error);
    }
  };

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
        ImageFormData.append('profileImage', selectedFile);
        setImageFormData(ImageFormData);
      }
    };
    input.click();
  };

  return (
    <Container>
      <Menu>
        <Item>프로필 수정하기</Item>
      </Menu>
      <UserContainer>
        <ImgContainer>
          <ImageBox>
            {uploadedImg ? (
              <img src={uploadedImg} alt="Uploaded" />
            ) : (
              <img src={`${UPLOADED_IMG_URL}${profileImage}`} alt="Profile" />
            )}
          </ImageBox>
          <LinkButton
            onClick={handleImageUpload}
            text="프로필 사진 업로드 하기"
          />
        </ImgContainer>
        <Info>
          <div>
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
          </div>
          <DataList>
            <Button
              onClick={handleSave}
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

const ErrorText = styled.a`
  color: red;
  font-size: 14px;
  margin-top: 5px; /* 빨간 글씨와 닉네임 입력창 사이의 여백 조정 */
`;

const ErrorBox = styled.div`
  padding-left: 74px;
`;

const ImageBox = styled.div`
  padding: 10px;
  background-color: var(--color-green-main);
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
