import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';
import { API_URL, UPLOADED_IMG_URL } from '../../constants/constants';

// 컴포넌트
import LikeAndCommentCount from '../../components/community/LikeAndCommentCount';
import Comment from '../../components/community/Comment';
import CommentWritingBox from '../../components/community/CommentWritingBox';
import Hr from '../../components/baseComponent/Hr';
import EditModalButton from '../../components/community/EditModalButton';

// 로직
import formatDateIncludeTime from '../../utils/formatDateIncludeTime';

// 아이콘
import { LuThumbsUp, LuChevronLeft } from 'react-icons/lu';

// 임시 데이터
import { profileImg } from '../../../temp-data-community';

interface Post {
  title?: string;
  content?: string;
  userId?: {
    nickName: string;
  };
  updatedAt?: string;
  categoryId?: {
    _id: string;
  };
  likeCount: number;
  likedUsers: string[];
  postImage: string;
}

interface Comment {
  deletedAt: string | null;
}

const POST: React.FC = () => {
  // const navigate = useNavigate(); 추후 삭제
  // const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState<Comment | null>(null);
  const [user] = useRecoilState(userState);
  const [post, setPost] = useState<Post | null>(null); // post
  const [likedCount, setLikedCount] = useState(0); // 좋아요 수
  const [isLiked, setIsLiked] = useState(false); // 유저가 좋아요 눌렀는지 여부
  const [commentCount, setCommentCount] = useState(0); //댓글 수

  const { postId } = useParams<{ postId: string }>();

  // post 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post/${postId}`);
        const postData = response.data.message[0];
        setPost(postData);
        setLikedCount(postData.likedUsers.length); // 추천해요 총 수
        setIsLiked(postData.likedUsers.includes(user?._id)); // 사용자가 해당 게시물의 추천해요 눌렀는지 여부(색깔 표시하기 위해)
        console.log('게시글 조회 성공', postData);
      } catch (error) {
        console.error('게시글 조회 실패', error);
      }
    };

    fetchData();
  }, [postId, user]);

  // 추천해요 누르고 취소하기 API
  const handleLiked = async () => {
    try {
      const Data = {
        userId: `${user?._id}`,
      };

      const response = await axios.put(`${API_URL}post/${postId}/like`, Data);
      setLikedCount(response.data.message);
      setIsLiked((prev) => !prev); // 추천해요 눌렀는지 여부 변경
      console.log('추천해요 보내기 성공');
    } catch (error) {
      console.log('추천해요 보내기 실패', error);
    }
  };

  const formattedDate = post?.updatedAt
    ? formatDateIncludeTime({ rowDate: post.updatedAt })
    : '';

  // 댓글 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}comment/${postId}`);
        const filteredComments: Comment[] = [];
        response.data.message.forEach((comment: Comment) => {
          if (comment.deletedAt === null) {
            filteredComments.push(comment);
          }
        });

        setComments(filteredComments);
        setCommentCount(comments?.length);
        console.log('댓글 조회 성공');
      } catch (error) {
        console.error('댓글 조회 실패', error);
      }
    };
    fetchData();
  }, [postId, commentCount]);

  // const handleToggleModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  // const handleDeleteButton = () => {
  //   // 알럿창, 확인 누를 시 글 삭제 요청
  //   const fetchData = async () => {
  //     const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

  //     if (confirmDelete) {
  //       try {
  //         const response = await axios.put(`${API_URL}post/${postId}/w`);
  //         console.log('글 삭제 성공', response.data.message);
  //         navigate(`/group/${post?.categoryId?._id}`); // 커뮤니티 페이지로 리다이렉트 -> 이전 화면으로 리다이렉트할 수도 있음
  //       } catch (error) {
  //         console.error('글 삭제 실패', error);
  //       }
  //     }
  //   };
  //   fetchData();
  // };

  // 댓글 등록
  const handleCreateComment = async (commentText: string) => {
    try {
      const commentData = {
        postId: `${postId}`,
        userId: `${user?._id}`,
        text: `${commentText}`,
      };

      await axios.post(`${API_URL}comment`, commentData);

      console.log('댓글 등록 성공');
      window.location.reload(); // 댓글 등록 후 새로고침
    } catch (error) {
      console.error('댓글 등록 실패', error);
    }
  };

  const imageSrc = `${UPLOADED_IMG_URL}${post?.postImage}`;

  return (
    <>
      {post && (
        <Container>
          <LeftContainer>
            <PostListButtonContainer>
              <LuChevronLeft />
              <PostList to={`/group/${post?.categoryId?._id}`}>
                글 목록 보기
              </PostList>
            </PostListButtonContainer>
          </LeftContainer>
          <PostContainer>
            <PostTopArea>
              <PostInformation>
                <PostTitle>{post.title}</PostTitle>
                <ProfileContainer>
                  <ProfileImg src={profileImg} alt="프로필 이미지" />
                  <p>{post?.userId?.nickName}</p>
                  <p>|</p>
                  <p>{formattedDate}</p>
                </ProfileContainer>
              </PostInformation>
              <PostOption>
                <LikeAndCommentCount
                  likeCount={likedCount}
                  commentCount={commentCount}
                  userId={user?._id}
                  postId={postId}
                />
                <EditModalButton />
                {/* <ActionButton 추후 제대로 돌아가면 삭제
                  border="default"
                  direction="horizontal"
                  onEdit={handleToggleModal}
                  onDelete={handleDeleteButton}
                />
                {showModal && (
                  <BigModal
                    title="글 수정하기"
                    value="수정"
                    component={<PostEdit onSubmit={} onSubmitImage={} />}
                    onClose={handleToggleModal}
                  />
                )} */}
              </PostOption>
            </PostTopArea>
            <PostContentArea>
              <pre>{post.content}</pre>
              <ImgContainer>
                <Image src={imageSrc} alt="이미지" />
              </ImgContainer>
              <Likes onClick={handleLiked} isLiked={isLiked}>
                <LuThumbsUp />
                <p>추천해요 {likedCount}</p>
              </Likes>
            </PostContentArea>
            <Hr />
            <div>
              <CommentWritingBox
                nickname={user?.nickName}
                onClick={handleCreateComment}
              ></CommentWritingBox>
              {comments?.map(
                (comment: {
                  _id: React.Key | null | undefined;
                  profileImg: string;
                  text: string;
                  userId: { nickName: string; _id: string };
                  createdAt: any;
                }) => (
                  <Comment
                    key={comment?._id}
                    profileImg={comment.profileImg}
                    text={comment.text}
                    nickname={comment?.userId?.nickName}
                    date={formatDateIncludeTime({ rowDate: comment.createdAt })}
                    userId={comment?.userId?._id}
                    commentId={comment?._id}
                  />
                ),
              )}
              {/* <Pagination /> */}
            </div>
          </PostContainer>
        </Container>
      )}
    </>
  );
};

export default POST;

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
  color: ${(props) =>
    props.isLiked ? 'var(--color-green-main)' : 'var(--color-grey-1)'};
  font-size: var(--font-size-ft-1);
  align-items: center;
  cursor: pointer;

  & > * {
    margin: 0 3px;
  }
`;

const PostList = styled(Link)`
  font-size: var(--font-size-md-2);
  margin: 0 5px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const ImgContainer = styled.div`
  margin-top: 20px;
  width: 1024px;
`;

const ProfileContainer = styled.div`
  display: flex;
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

const Image = styled.img`
  width: 600px;
  height: auto;
`;