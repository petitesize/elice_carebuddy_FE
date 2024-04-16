import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // react-router-dom에서 useLocation 가져오기
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

const UserpageContent: React.FC = () => {
  // userpage/{userId} 에 따라 데이터 불러옴
  const location = useLocation(); // 현재 URL 정보 가져오기
  const pathname = location.pathname;
  const userIdIndex = pathname.lastIndexOf('/userpage/') + '/userpage/'.length;
  const userId = pathname.substring(userIdIndex);
  console.log(userId);

  const [buddy, setBuddy] = React.useState<Pet[] | null>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>();
  const [user, setUser] = React.useState<User | null>(null);

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        const buddyData = response.data.message;
        const filteredBuddy = buddyData.filter(buddy => buddy.userId === userId);
        setBuddy(filteredBuddy);
        console.log('성공');
      } catch (error) {
        console.error('Error fetching buddy by userId:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users/${userId}`);
        const userData = response.data.message;
        console.log(userData);
        setUser(userData);
        console.log('성공')
      } catch (error) {
        console.error('에러', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <Container>
      <ProfileSection
        nickName={user?.nickName}
        introduce={user?.introduce} />
      <PetCardSection
        nickName={user?.nickName}
        selectedPetName={selectedPet?.name}
        pets={buddy}
        onPetClick={handlePetClick} />
      <ListSection userId={userId || ''} />
    </Container>
  );
};

export default UserpageContent;
