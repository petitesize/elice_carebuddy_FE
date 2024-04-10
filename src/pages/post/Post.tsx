import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import LikeAndCommentCount from '../../components/community/LikeAndCommentCount';
import Comment from '../../components/community/Comment';
// import Pagination from '../../components/baseComponent/Pagination';
import CommentWritingBox from '../../components/community/CommentWritingBox';
import ActionButton from '../../components/baseComponent/ActionButton';
import Hr from '../../components/baseComponent/Hr';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

// 임시 데이터
import {
  tempImg,
  profileImg,
  tempContent,
  tempTitle,
  tempLikeCount,
  tempCommentNickname,
  tempComment,
} from '../../../temp-data-community';

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
  width: 22%;
  padding-right: 15px;
  box-sizing: border-box;

  p {
    color: var(--color-grey-1);
  }
`;

const PostListButtonContainer = styled.div`
  display: flex;
  fles-direction: row;
  color: var(--color-grey-1);
  font-size: var(--font-size-md-2);
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

const PostInformation = styled.div``;

const PostTitle = styled.p`
  font-size: var(--font-size-lg-1);
  font-weight: var(--font-weight-semibold);
  margin: 0 0 10px 0;
`;

const PostOption = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostContentArea = styled.div`
  margin: 20px 0;
  font-size: var(--font-size-md-1);
  line-height: 1.4rem;
  color: var(--color-black);
  width: 100%;

  img {
    margin: 10px 0 20px 0;
  }

  pre {
    white-space: pre-wrap;
  }
`;

const Likes = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 px;
  color: var(--color-grey-1);

  p {
    font-size: var(--font-size-ft-1);
    margin: 0 5px;
  }
`;

const CommentArea = styled.div``;

const ImgContainer = styled.div`
  margin-top: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  align-items: center;
  height: auto;

  p {
    margin: 0 3px;
  }
`;

const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const editButtonHandler = () => {
  return(console.log('에딧버튼핸들러실행!'))
};

const deleteButtonHandler = () => {
  return(console.log('딜리트버튼핸들러실행!'))
};

import comments from '../../../temp-data-comment.json';
const POST: React.FC = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <PostListButtonContainer>
            <LuChevronLeft />
            <p>글 목록 보기</p>
          </PostListButtonContainer>
        </LeftContainer>
        <PostContainer>
          <PostTopArea>
            <PostInformation>
              <PostTitle>{tempTitle}</PostTitle>
              <ProfileContainer>
                <ProfileImg src={profileImg} alt="프로필 이미지" />
                <p>냥멍이</p>
                <p>|</p>
                <p>2024.03.27 23:10</p>
              </ProfileContainer>
            </PostInformation>
            <PostOption>
              <LikeAndCommentCount likeCount={1} commentCount={2} />
              <ActionButton border="default" direction='horizontal' editOnClick={editButtonHandler} deleteOnClick={deleteButtonHandler}/>
            </PostOption>
          </PostTopArea>
          <PostContentArea>
            <pre>{tempContent}</pre>
            <ImgContainer>
              <img src={tempImg} alt="이미지" />
            </ImgContainer>
            <Likes>
              <LuThumbsUp />
              <p>추천해요 {tempLikeCount}</p>
            </Likes>
          </PostContentArea>
          <Hr />
          <CommentArea>
            <CommentWritingBox
              text={tempComment}
              nickname={tempCommentNickname}
            ></CommentWritingBox>
            {comments.map((comment, index) => (
              <Comment
                key={index}
                profileImg={comment.profileImg}
                text={comment.text}
                nickname={comment.nickname}
                date={comment.date}
              />
            ))}
            {/* <Pagination /> */}
          </CommentArea>
        </PostContainer>
      </Container>
    </>
  );
};

export default POST;
