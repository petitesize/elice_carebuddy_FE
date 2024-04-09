import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
`;

const UserContainer = styled.div`
  font-size: 14px;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #cecece;
  padding-bottom: 20px;
`;

const Page = styled.div`
  display: flex;
`;

const List = styled.div`

`;

const Data = styled.a`

`;

const PageList: React.FC = () => {
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
    <UserContainer>
      <List>
        <Data>{DummyData.group} {animalType}</Data>
      </List>
      <List>
        <Data>{DummyData.title}</Data>
      </List>
      <List>
        <Data>{formatDate(DummyData.createdAt)}</Data>
      </List>
    </UserContainer>
  );
};

export default PageList;
