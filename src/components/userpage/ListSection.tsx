import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link를 가져옵니다.
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

const DataContainer = styled.div``;

// Link 컴포넌트를 스타일링하여 언더라인을 없애줍니다.
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #343434;
`;

// post.categoryId.group에 색상을 적용하는 스타일
const CategoryGroup = styled.span`
  color: #6d987a; // 원하는 색상으로 변경
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
  userId: string;
}

const ListSection: React.FC<ListSectionProps> = ({ userId }) => {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        const postData = response.data.message;

        const matchedPosts = postData.filter(post => post.userId?._id === userId);

        if (matchedPosts.length > 0) {
          setPosts(matchedPosts);
        } else {
          console.log('일치하는 데이터가 없습니다.');
        }

      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchData();
  }, [userId]);

  const formatDate = (date: string) => {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = formattedDate.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

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
                  {/* StyledLink를 사용하여 Link를 스타일링합니다. */}
                  <StyledLink to={`/post/${post?._id}`}>
                    <Data>
                      [<CategoryGroup>{post?.categoryId?.group}</CategoryGroup>] {post?.title}
                    </Data>
                  </StyledLink>
                </DataContainer>
                <DataContainer>
                  <Data>{formatDate(post?.createdAt)}</Data>
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
