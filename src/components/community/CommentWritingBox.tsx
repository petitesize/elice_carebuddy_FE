import styled from 'styled-components';
import LinkButton from '../baseComponent/LinkButton.tsx';


type CommentWritingBoxProps = {
  text?: string;
  nickname: string;
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
  margin-bottom: 20px;
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

const CommentWritingBox: React.FC<CommentWritingBoxProps> = ({ nickname }) => (
  <>
    <StyledCommentWritingBox>
      <Nickname>{nickname}</Nickname>
      <CommentBox placeholder="댓글 내용을 입력하세요..." />
      <ButtonContainer>
        <LinkButton text="등록하기" />
      </ButtonContainer>
    </StyledCommentWritingBox>
  </>
);

export default CommentWritingBox;
