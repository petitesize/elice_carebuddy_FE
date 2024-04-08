import styled from 'styled-components';
import React from 'react';
import PageList from './PageList';
import HospitalSearchResult from '../../pages/hospitalInfo/HosplitalSearchResult'

const Container = styled.div`
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.span`
  padding: 10px 10px 10px 0;
  font-weight: bold;
  font-size: 20px;
`;

const Item = styled.a`
  font-weight: bold;
  padding: 10px 10px 10px 0;
`;

const Line = styled.hr`
  border: 0.1px solid #cecece;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.a`
  font-weight: bold;
`;

const Data = styled.a`

`;

const List: React.FC = () => {
  // 더미 데이터
  const DummyData = {
    name: 0, // 대분류: 0강아지 1고양이
    group: '눈',
    title: '아이가 아파요 무슨일 일까요?',
    createdAt: new Date('2024-03-22'),
  };

  // name 값에 따라 출력할 동물을 결정
  const animalType = DummyData.name === 0 ? '강아지' : '고양이';

  // 년-월-일 형식으로 날짜 포맷팅 함수
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  return (
    <Container>
      <Menu>
        <Item>작성 글 목록</Item>
        <Line />
      </Menu>
      <UserContainer>
        <ListItem>
          <Title>그룹</Title>
        </ListItem>
        <ListItem>
          <Title>글 제목</Title>
        </ListItem>
        <ListItem>
          <Title>작성일</Title>
        </ListItem>
      </UserContainer>
      <Line />
      <PageList />
      <PageList />
      <PageList />
    </Container>
  );
};

export default List;
