import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import axios from 'axios';
import { API_URL } from './../../constants/constants';
import UserInfoSection from './UserInfoSection';
import ProfileSection from './ProfileSection';
import PetCardSection from './PetCardSection';
import ListSection from './ListSection';

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
  const [user, setUser] = useRecoilState(userState);
  const [post, setPost] = useState<Post | null>(null);

  const handlePetClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        const buddyData = response.data.message;
        // userId가 recoil로 불러온 user의 userId와 동일한 것만 필터링
        const filteredBuddy = buddyData.filter(buddy => buddy.userId === user?._id);
        setBuddy(filteredBuddy);
        console.log('성공');
      } catch (error) {
        console.error('Error fetching buddy by userId:', error);
      }
    };

    fetchData();
  }, [user]);

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
      <ListSection userId={user?._id}/>
    </Container>
  );
};

export default MypageContent;


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;