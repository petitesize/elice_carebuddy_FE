import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './../../constants/constants';

const Container = styled.div``;

const UserContainer = styled.div`
  font-size: 16px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
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

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0;
`;

const Data = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const SectionContainer = styled.div`
  margin: 20px 0 40px 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #cecece;
`;

const DataContainer = styled.div`
  display: flex;
`;

interface Post {
  _id: string;
  userId: string;
  categoryId: {
    group: string;
  };
  name: number;
  title: string;
  createdAt: string;
}

interface ListSectionProps {
  userId: string; // Props로 userId 추가
}

const ListSection: React.FC<ListSectionProps> = ({ userId }) => { // Props로 userId 받음

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        const postData = response.data.message;

        // userId가 일치하는 데이터 찾기
        const matchedPosts = postData.filter(post => post.userId?._id === userId);

        if (matchedPosts.length > 0) {
          // userId와 일치하는 데이터가 있다면 여기서 처리
          console.log('userId와 일치하는 데이터:', matchedPosts);
          setPosts(matchedPosts);
        } else {
          // userId와 일치하는 데이터가 없다면 여기서 처리
          console.log('일치하는 데이터가 없습니다.');
        }

      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, [userId]); // userId가 변경될 때마다 실행

  // 년-월-일 형식으로 날짜 포맷팅 함수
  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = formattedDate.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 제목과 데이터 배열
  const titles = ['그룹', '글 제목', '작성일'];

  return (
    <Container>
      <Menu>
        <Item>작성 글 목록</Item>
      </Menu>
      <SectionContainer>
        <UserContainer>
          <ListContainer>
            <ListItem>
              <Title>{titles[1]}</Title>
              <Title>{titles[2]}</Title>
            </ListItem>
            {posts.map((post, index) => (
              <ListItem key={index}>
                <DataContainer>
                  <Data>[{post.categoryId.group}] {post.title}</Data>
                </DataContainer>
                <DataContainer>
                  <Data>{formatDate(post.createdAt)}</Data>
                </DataContainer>
              </ListItem>
            ))}
          </ListContainer>
        </UserContainer>
      </SectionContainer>
    </Container>
  );
};

export default ListSection;
