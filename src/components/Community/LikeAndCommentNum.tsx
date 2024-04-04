import styled from 'styled-components';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';

type LikeAndCommentNumProps = {
  likeCount: number,
  commentCount: number
}

const StyledikeAndCommentNum = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 96px;
height: 36px;
background-color: #EEEDE5;
border-radius: 4px;
align-items: center;
padding: 0 10px;
`

const EmoticonImg = styled.img`
width: 25px;
height: 25px;
`

const P = styled.p`
font-size: 13px;
`

const LikeAndCommentNum: React.FC<LikeAndCommentNumProps> = ({ likeCount, commentCount  }) => (
  <StyledikeAndCommentNum>
    <EmoticonImg src={like} alt="좋아요 아웃라인 이모티콘" />
    <P>{likeCount}</P>
    <EmoticonImg src={comment} alt="댓글 아웃라인 이모티콘" />
    <P>{commentCount}</P>
  </StyledikeAndCommentNum>
);

export default LikeAndCommentNum