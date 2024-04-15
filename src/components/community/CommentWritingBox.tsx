import styled from 'styled-components';
import LinkButton from '../baseComponent/LinkButton.tsx';
import React, { ChangeEvent, useState } from 'react';

type CommentWritingBoxProps = {
  text?: string;
  nickname: string | undefined;
  onClick: (commentText: string) => void;
};

const StyledCommentWritingBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-2);
  border-radius: 10px;
  padding: 10px 15px;
  font-size: var(--font-size-md-1);
  position: relative;
  height: 120px;
  margin: 20px 0;
`;

const Nickname = styled.p`
  margin-bottom: 5px;
`;

const CommentBox = styled.textarea`
  height: 70px;
  border: none;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 15px;
  font-size: var(--font-size-ft-1);
  margin: 0 5px 10px 5px;
  padding: 0 0 2px;
`;

const CommentWritingBox: React.FC<CommentWritingBoxProps> = ({
  nickname,
  onClick,
}) => {
  const [commentText, setCommentText] = useState(''); 

  // 댓글 내용 적으면 업데이터
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  // 댓글 등록
  const handleCommentSubmit = (commentText: string) => {
    if (commentText.trim() === '') {
      alert('댓글 내용을 입력해주세요')
    } else {
      onClick(commentText);
      alert('댓글 등록이 완료되었습니다')
    }      
    setCommentText('');
  };

  return (
    <StyledCommentWritingBox>
      <Nickname>{nickname}</Nickname>
      <CommentBox value={commentText} onChange={handleChange} placeholder="댓글 내용을 입력하세요..." />
      <ButtonContainer>
        <LinkButton text="등록하기" onClick={() => handleCommentSubmit(commentText)} />
      </ButtonContainer>
    </StyledCommentWritingBox>
  );
};

export default CommentWritingBox;
