import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

// 컴포넌트
import LikeAndCommentCount from '../../components/community/LikeAndCommentCount';
import Comment from '../../components/community/Comment';
// import Pagination from '../../components/baseComponent/Pagination';
import CommentWritingBox from '../../components/community/CommentWritingBox';
import ActionButton from '../../components/baseComponent/ActionButton';
import Hr from '../../components/baseComponent/Hr';
import BigModal from '../../components/baseComponent/BigModal';
import PostEdit from '../../components/community/PostEdit';

// 로직
import formatDateIncludeTime from '../../services/formatDateIncludeTime';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

// 임시 데이터
import {
  tempImg,
  profileImg,
  tempLikeCount,
  tempCommentNickname,
  tempComment,
} from '../../../temp-data-community';

import comments from '../../../temp-data-comment.json';

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

interface Post {
  title: string;
  content: string;
  userId: string;
  updatedAt: string;
}

interface Comment {}
const postId = '661762dce744e418e35138e3'; //개별 postId

const POST: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState<Post>({});
  // const [comments, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post/${postId}`);
        setPost(response.data.message[0]);
        console.log('게시글 조회 성공');
        console.log(response.data.message[0]); //나중에 삭제

      } catch (error) {
        console.error('게시글 조회 실패', error);
      }
    };

    fetchData();
  }, []);

  const formattedDate = formatDateIncludeTime({ rowDate: post.updatedAt });

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleSavePost = () => {
    // API 생성되면 로직 구현
    setShowModal(false);
  };

  const handleDeleteButton = () => {
    return; //추후 API 생성되면 추가
  };

  return (
    <>
      {post && (
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
                <PostTitle>{post.title}</PostTitle>
                <ProfileContainer>
                  <ProfileImg src={profileImg} alt="프로필 이미지" />
                  <p>{post.userId && post.userId.nickName}</p>
                  <p>|</p>
                  <p>{formattedDate}</p>
                </ProfileContainer>
              </PostInformation>
              <PostOption>
                <LikeAndCommentCount likeCount={1} commentCount={2} />
                <ActionButton
                  border="default"
                  direction="horizontal"
                  onEdit={handleToggleModal}
                  onDelete={handleDeleteButton}
                />
                {showModal && (
                  <BigModal
                    title="글 수정하기"
                    value="수정"
                    component={<PostEdit />}
                    onClose={handleToggleModal}
                  />
                )}
              </PostOption>
            </PostTopArea>
            <PostContentArea>
              <pre>{post.content}</pre>
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
      )}
    </>
  );
};

export default POST;
