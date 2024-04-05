import styled from 'styled-components';
import { LuThumbsUp } from 'react-icons/lu';
import { BsChatLeft } from 'react-icons/bs';
import { LuMessageSquare } from 'react-icons/lu';

type LikeAndCommentCountProps = {
  likeCount: number;
  commentCount: number;
};

const Container = styled.div`
  width: 85px;
  height: 36px;
  background-color: #eeede5;
  border-radius: 4px;
  align-items: center;
  padding: 5px 15px;
  color: #343434;
`;

const StyledLikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  font-weight: 700;
  p {
    font-size: 17px;

  }
`;

const LikeAndCommentCount: React.FC<LikeAndCommentCountProps> = ({
  likeCount,
  commentCount,
}) => (
  <Container>
    <StyledLikeAndCommentCount>
      <LuThumbsUp />
      <p>{likeCount}</p>
      <LuMessageSquare />
      <p>{commentCount}</p>
    </StyledLikeAndCommentCount>
  </Container>
);

export default LikeAndCommentCount;
