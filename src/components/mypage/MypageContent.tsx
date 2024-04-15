import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import UserInfoSection from './UserInfoSection';
import ProfileSection from './ProfileSection';
import PetCardSection from './PetCardSection';
import ListSection from './ListSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface User {
  _id: string;
  nickName: string;
  introduce: string;
  email: string;
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

const MypageContent: React.FC = () => {
  const [buddy, setBuddy] = useState<Pet[] | null>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>();
  const [user, setUser] = useState<User | null>(null);
  const [post, setPost] = useState<Post | null>(null);

  //테스트용
  const userId = '6613fbcdfaebdd59e9882df3';

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        const buddyData = response.data.message;
        // userId가 6613fbcdfaebdd59e9882df3인 buddy만 필터링
        const filteredBuddy = buddyData.filter(buddy => buddy.userId === userId);
        setBuddy(filteredBuddy);
        console.log('성공');
      } catch (error) {
        console.error('Error fetching buddy by userId:', error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users/${userId}`);
        console.log(response.data);
        const userData = response.data.message;
        setUser(userData);
        console.log('성공');
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Container>
      <UserInfoSection
        nickName={user?.nickName}
        introduce={user?.introduce}
        email={user?.email}
      />
      <ProfileSection
        nickName={user?.nickName}
        introduce={user?.introduce}
      />
      <PetCardSection
        nickName={user?.nickName}
        selectedPetName={selectedPet?.name}
        pets={buddy}
        onPetClick={handlePetClick}
      />
      <ListSection userId={userId}/>
    </Container>
  );
};

export default MypageContent;
