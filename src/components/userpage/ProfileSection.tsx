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
  margin: 30px 0 30px 0;
  padding: 20px;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 10px;
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
  justify-content: center;
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
  font-size: 16px;
`

interface ProfilesProps {
  nickName?: string;
  introduce?: string;
}

const Profile: React.FC<ProfilesProps> = ({ nickName, introduce }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  return (
    <Container>
      <Menu>
        <Item>프로필</Item>
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
            <InputBox>{nickName}</InputBox>
            <InputBox>{introduce}</InputBox>
          </InputList>
        </InputContainer>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;
