import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import LikeAndCommentCount from '../../components/community/LikeAndCommentCount';
import PostControlBox from '../../components/community/PostControlBox';
import Comment from '../../components/community/Comment';
import Pagination from '../../components/community/Pagination';
import CommentWritingBox from '../../components/community/CommentWritingBox';

// 아이콘
import { LuThumbsUp } from 'react-icons/lu';

// 임시 데이터
import { tempImg, tempContent, tempTitle, tempDate, tempLikeCount, tempCommentNickname, tempComment } from '/Users/using/Desktop/front/temp-data-community.tsx'


const POST: React.FC = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  `;

  const LeftContainer = styled.div`
    font-size: var(--font-size-lg-1);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 25%;

    p {
      color: vat(--color-grey-1);
    }
  `;
  const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
  `;

  const PostTopArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 5px 0;
  `;

  const PostInformation = styled.div`
  `;

  const PostTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 10px 0;
  `;

  const PostUploadedDate = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight-regular);
  color: var(--color-grey-1);
  `;


  const PostOption = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const PostContentArea = styled.div`
  margin: 10px 0 20px 0;
  font-size: 16px;
  line-height: 1.2rem;
  color: #343434;

  img {
    margin: 10px 0 20px 0;
  }
  `;

  const Likes = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  color: #7d7d7d;

  p {
    margin: 0 5px;
  }
  `

  const Hr = styled.hr`
    border-top: 1px solid #7d7d7d;
    width: 100%;
  `;

  const CommentArea = styled.div``;

  return (
    <>
      <Container>
        <LeftContainer>
          <p>글 목록 보기</p>
          <p>프로필 영역</p>
        </LeftContainer>
        <PostContainer>
          <PostTopArea>
            <PostInformation>
              <PostTitle>{tempTitle}</PostTitle>
              <PostUploadedDate>{tempDate}</PostUploadedDate>
            </PostInformation>
            <PostOption>
              <LikeAndCommentCount likeCount={1} commentCount={2} />
              <PostControlBox />
            </PostOption>
          </PostTopArea>
          <PostContentArea>
            <p>{tempContent}</p>
            <img src={tempImg} alt="이미지" />
            <Likes>
            <LuThumbsUp />
            <p>추천해요 {tempLikeCount}</p>
            </Likes>
          </PostContentArea>
          <Hr></Hr>
          <CommentArea>
            <CommentWritingBox text={tempComment} nickname={tempCommentNickname}></CommentWritingBox>
            <Comment text={tempComment} nickname={tempCommentNickname} profileImg={tempImg} date={tempDate}></Comment>
            <Pagination />
          </CommentArea>
        </PostContainer>
      </Container>
    </>
  );
};

export default POST;
