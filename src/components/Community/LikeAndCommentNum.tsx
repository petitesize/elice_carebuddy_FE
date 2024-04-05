import styled from 'styled-components';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';

type LikeAndCommentNumProps = {
  likeCount: number;
  commentCount: number;
};

const StyledikeAndCommentNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85px;
  height: 36px;
  background-color: #eeede5;
  border-radius: 4px;
  align-items: center;
  padding: 0 10px;
  color: #343434;

  p {
    font-size: 13px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const LikeAndCommentNum: React.FC<LikeAndCommentNumProps> = ({
  likeCount,
  commentCount,
}) => (
  <StyledikeAndCommentNum>
    <img src={like} alt="좋아요 아웃라인 이모티콘" />
    <p>{likeCount}</p>
    <img src={comment} alt="댓글 아웃라인 이모티콘" />
    <p>{commentCount}</p>
  </StyledikeAndCommentNum>
);

export default LikeAndCommentNum;
