import styled from 'styled-components';

type CommentWritingBoxProps = {
  text?: string;
  nickname: string;
};

const StyledCommentWritingBox = styled.div`
display: flex;
align-items: center; /* 수직 가운데 정렬 */
border: 1px solid var(--color-grey-2);
border-radius: 10px;
padding: 5px 15px;
  font-size: var(--font-size-md-1);
`;

const Nickname = styled.p`
margin-right: 10px; 
`

const InputBox = styled.input`
flex: 1; /* 인풋박스가 남은 공간을 모두 차지하도록 설정 */
margin-right: 10px; /* 인풋박스와 버튼 사이 간격 조정 */
`

const CommentWritingBox: React.FC<CommentWritingBoxProps> = ({
  text,
  nickname,
}) => (
  <>
    <StyledCommentWritingBox>
      <Nickname>{nickname}</Nickname>
      <InputBox type="text" />
      <button>등록하기</button>
    </StyledCommentWritingBox>
  </>
);

export default CommentWritingBox;
