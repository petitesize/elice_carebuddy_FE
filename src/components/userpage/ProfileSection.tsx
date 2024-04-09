import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 20px 0;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 22px;
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

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly
`

const InputBox = styled.a`
  padding: 10px 10px 10px 0;
  width: 100%;
  margin: 0 10px 10px 0;
`

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
interface UserData {
  nickName: string;
  introduction: string;
}

const UserData = {
  nickName: '케어버디',
  introduction: '안녕하세요 동물을 사랑하는 사람입니다.'
}

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  return (
    <Container>
      <Menu>
        <Item>프로필</Item>
        <Line />
      </Menu>
      <UserContainer>

        <ImgContainer>
          <PetProfileImg src={profileImage || undefined} />
        </ImgContainer>

        <Info>
        <InputContainer>
          <List>
            <Item>닉네임</Item>
            <Item>소개</Item>
          </List>
          <InputList>
            <InputBox>{UserData.nickName}</InputBox>
            <InputBox>{UserData.introduction}</InputBox>
          </InputList>
        </InputContainer>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;
