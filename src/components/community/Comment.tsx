import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userQuery } from '../../recoil/selectors.ts';

import { API_URL } from '../../constants/constants.tsx';

// 컴포넌트
import LinkButton from '../baseComponent/LinkButton.tsx';

type CommentProps = {
  text: string;
  profileImg: string;
  nickname: string;
  date: string;
  userId: string;
  commentId: string | null | undefined;
};

const StyledComment = styled.div`
  display: flex;
  margin-top: 12px;
  height: auto;
  width: auto;
  font-size: var(--font-size-md-1);
  padding: 5px 0 5px 0px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const Nickname = styled.p`
  font-size: var(--font-size-md-1);
  margin-right: 5px;
`;

const UploadedDate = styled.p`
  font-size: var(--font-size-ft-1);
  color: var(--color-grey-1);
`;

const Content = styled.div`
  line-height: 1.3;
  width: 700px;
  font-size: var(--font-size-ft-1);
  margin: 10px 0;
`;

const ProfileImg = styled.img`
  margin-right: 10px;
`;

const CommentOptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  & > * {
    margin: 0 5px;
    font-size: var(--font-size-sm-1);
  }
`;

const Info = styled.div`
  display: flex;
`;

const OnEditComment = styled.textarea`
  width: 650px;
  height: 60px;
  border-color: var(--color-grey-2);
  margin: 5px 10px 0 0;
  padding: 5px 5px;
`;

const Comment: React.FC<CommentProps> = ({
  text,
  profileImg,
  nickname,
  date,
  userId,
  commentId,
}) => {
  // const [user] = useRecoilState(userState);
  const [user] = useRecoilState(userQuery);
  const [onEdit, setOnEdit] = useState(false);
  const [editedText, setEditedText] = useState(text);

  // 댓글 수정
  const handleSave = async () => {
    const Data = {
      text: `${editedText}`,
    };
    try {
      await axios.put(`${API_URL}comment/${commentId}`, Data);
      console.log('댓글 수정 성공.');
      window.location.reload(); // 수정 후 새로고침
    } catch (error) {
      console.error('댓글 수정 실패', error);
    }
    setOnEdit(false);
  };

  // 댓글 삭제
  const handleDeleteButton = () => {
    // 알럿창, 확인 누를 시 댓글 삭제 요청
    const fetchData = async () => {
      const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

      if (confirmDelete) {
        try {
          const response = await axios.delete(`${API_URL}comment/${commentId}`);
          console.log('댓글 삭제 성공', response.data.message);
          window.location.reload(); // 삭제 후 새로고침
        } catch (error) {
          console.error('댓글 삭제 실패', error);
        }
      }
    };
    fetchData();
  };

  return (
    <StyledComment>
      <ProfileImg src={profileImg} alt="댓글 프로필 사진" />
      <div>
        <Info>
          <Nickname>{nickname}</Nickname>
          <UploadedDate>{date}</UploadedDate>
        </Info>
        {onEdit ? (
          <>
            <OnEditComment
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <LinkButton text="저장" onClick={handleSave} />
          </>
        ) : (
          <Content>{text}</Content>
        )}
        {user?._id === userId && onEdit === false && (
          <CommentOptionWrapper>
            <LinkButton
              text="수정"
              onClick={() => setOnEdit((prev) => !prev)}
            />
            <LinkButton text="삭제" onClick={handleDeleteButton} />
          </CommentOptionWrapper>
        )}
      </div>
    </StyledComment>
  );
};

export default Comment;
