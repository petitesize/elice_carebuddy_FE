import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import ProfileSection from './ProfileSection'
import PetCardSection from './PetCardSection'
import ListSection from './ListSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface User {
  nickName: string;
  introduce: string;
}

interface Pet {
  _id: string;
  name: string;
  kind: string;
  age: number;
  profileImg: string;
}

interface Post {
  _id: string;
  userId: string;
  categoryId: string;
  name: number;
  group: string;
  title: string;
  createdAt: Date;
}

type UserPageProps = {
  userId: string
}

// userId props로 받아오기
const UserpageContent: React.FC<UserPageProps> = ({ userId = '6613fbcdfaebdd59e9882df3' }) => {
  const [buddy, setBuddy] = React.useState<Pet[] | null>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>();
  const [user, setUser] = React.useState<User | null>(null);
  const [post, setPost] = React.useState<Post | null>(null);

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        //console.log(response.data);
        const buddyData = response.data.message;
        setBuddy(buddyData);
        console.log('성공')

        // 첫 렌더링 되었을 때, 선택된 펫이 없으므로 등록된 반려동물이 있는 경우 첫 번째 반려동물을 선택된 펫으로 지정
        if (!selectedPet && buddyData.length > 0) {
          setSelectedPet(buddyData[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users/${userId}`);
        //console.log(response.data);
        const userData = response.data.message;
        console.log(userData);
        setUser(userData);
        console.log('성공')
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post/${userId}`);
        //console.log(response.data);
        const postData = response.data.message[0];
        console.log(response.data.message);
        setPost(postData);
        //console.log('성공')

        // categoryId가 "6617c6dab39abf604bbe8dcc"인 경우 '눈'으로 설정
        if (postData.categoryId._id === "6617c6dab39abf604bbe8dcc") {
          postData.categoryId._id = "눈";
        }
        //console.log(postData.categoryId)

      } catch (error) {
        //console.error('에러', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <ProfileSection nickName={user?.nickName} introduce={user?.introduce} />
      <PetCardSection
        nickName={user?.nickName}
        selectedPetName={selectedPet?.name}
        pets={buddy}
        onPetClick={handlePetClick} />
      <ListSection
        //categoryId 값을(숫자) 눈으로 변경
        categoryId={post?.categoryId._id}
        title={post?.title}
        createdAt={post?.createdAt}
      />
    </Container>
  );
};

export default UserpageContent;
