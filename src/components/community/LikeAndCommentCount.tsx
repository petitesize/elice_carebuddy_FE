import styled from 'styled-components';
import { LuThumbsUp } from 'react-icons/lu';
import { LuMessageSquare } from 'react-icons/lu';

type LikeAndCommentCountProps = {
  likeCount: number;
  commentCount: number;
};

const StyledLikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85px;
  height: 36px;
  background-color: var(--color-beige-main);
  border-radius: 4px;
  padding: 5px 15px;

  p {
    sont-size: var(--font-size-ft-1);
  }
`;

const LikeAndCommentCount: React.FC<LikeAndCommentCountProps> = ({
  likeCount,
  commentCount,
}) => (
  <StyledLikeAndCommentCount>
    <LuThumbsUp />
    <p>{likeCount}</p>
    <LuMessageSquare />
    <p>{commentCount}</p>
  </StyledLikeAndCommentCount>
);

export default LikeAndCommentCount;
