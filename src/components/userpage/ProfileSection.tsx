import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 40px 0;
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
/* interface UserData {
  nickName: string;
  introduction: string;
}

const UserData = {
  nickName: '케어버디',
  introduction: '안녕하세요 동물을 사랑하는 사람입니다.'
} */

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [user, setUser] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users/6613fbcdfaebdd59e9882df3`);
        console.log(response.data);
        setUser(response.data.message);
        console.log('성공')
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, []);

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
            <InputBox>{user.nickName}</InputBox>
            <InputBox>{user.introduce}</InputBox>
          </InputList>
        </InputContainer>
        </Info>
      </UserContainer>
    </Container>
  );
};

export default Profile;