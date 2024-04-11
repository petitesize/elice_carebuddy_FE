import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PetProfileCards from '../diary/PetProfileCards';
import axios from 'axios';
import { API_URL } from './../../constants/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid #cecece;
  padding-bottom: 10px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const PetCard: React.FC = () => {
  // 더미 데이터
  // const DummyData = {
  //   nickName: '케어버디',
  //   petName: '냥이',
  //   breeds: '여자',
  //   petAge: 2,
  //   petImg: 'undefined',
  // };
  const DummyData = {
    nickName: 'Owner1',
    pets: [
      {
        name: 'Cat1',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat2',
        breeds: '래그돌',
        age: 4,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat3',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
      {
        name: 'Cat4',
        breeds: '코리안 숏헤어',
        age: 16,
        img: '/src/assets/temp-profile.png',
      },
    ],
  };

  const [buddy, setBuddy] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}buddy`);
        console.log(response.data);
        setBuddy(response.data.message);
        console.log('성공')
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, []);

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
        <Item>{user.nickName}님의 반려동물</Item>
      </Menu>
      <UserContainer>
        <PetProfileCards profiles={buddy} />
      </UserContainer>
    </Container>
  );
};

export default PetCard;
