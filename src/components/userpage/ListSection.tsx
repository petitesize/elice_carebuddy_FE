import styled from 'styled-components';
import React from 'react';
import PageList from './PageList';
import HospitalSearchResult from '../information/HosplitalSearchResult';

const Container = styled.div``;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #cecece;
  padding-bottom: 20px;
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

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.a`
  font-weight: bold;
  font-size: 16px;
`;

const Data = styled.a`
`;

const SectionContainer = styled.div`
    margin: 20px 0 40px 0;
`
const List: React.FC = () => {
  // 더미 데이터
  const DummyData = {
    name: 0, // 대분류: 0강아지 1고양이
    group: '눈',
    title: '아이가 아파요 무슨일 일까요?',
    createdAt: new Date('2024-03-22'),
  };

  return (
    <Container>
      <Menu>
        <Item>작성 글 목록</Item>
      </Menu>
      <SectionContainer>
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
      <PageList />
      <PageList />
      <PageList />
      </SectionContainer>
    </Container>
  );
};

export default List;
