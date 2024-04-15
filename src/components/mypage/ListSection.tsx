import styled from 'styled-components';
import React from 'react';

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

const TitleItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #cecece;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #cecece;
`;

interface Post {
  _id: string;
  userId: string;
  categoryId: string;
  name: number;
  title: string;
  createdAt: Date;
}

const ListSection: React.FC<Post> = ({
  _id,
  userId,
  categoryId,
  name,
  title,
  createdAt,
}) => {
  // name 값에 따라 출력할 동물을 결정
  const animalType = name === 0 ? '강아지' : '고양이';

  // 년-월-일 형식으로 날짜 포맷팅 함수
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 제목과 데이터 배열
  const titles = ['그룹', '글 제목', '작성일'];
  const datas = [`${categoryId} ${animalType}`, title, formatDate(new Date(createdAt))];

  return (
    <Container>
      <Menu>
        <Item>작성 글 목록</Item>
      </Menu>
      <SectionContainer>
        <UserContainer>
          <ListContainer>
            <TitleItem>
              {titles.map((title, index) => (
                <Title key={index}>{title}</Title>
              ))}
            </TitleItem>
            <ListItem>
              {datas.map((data, index) => (
                <Data key={index}>{data}</Data>
              ))}
            </ListItem>
          </ListContainer>
        </UserContainer>
      </SectionContainer>
    </Container>
  );
};

export default ListSection;
