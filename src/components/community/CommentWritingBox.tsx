import styled from 'styled-components';

type CommentWritingBoxProps = {
  text?: string;
  nickname: string;
};

const StyledCommentWritingBox = styled.input`
display: flex;
flex-direction: row;
justify-content: flex-start;
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 30px;
  height: auto;
  width: auto;
  font-size: 14px;
  padding: 5px 0 5px 15px;

`;

const Content = styled.div`
`;

const CommentWritingBox: React.FC<CommentWritingBoxProps> = ({
  text,
  nickname,
}) => (
  <>
  <p>{nickname}</p>
  <StyledCommentWritingBox>
  </StyledCommentWritingBox> 
  <p>등록하기</p>
  </>
);

export default CommentWritingBox;
