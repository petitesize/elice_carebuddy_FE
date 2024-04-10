import styled from 'styled-components';
import LikeAndCommentCount from './LikeAndCommentCount';
import Hr from '../baseComponent/Hr';

type FeedBoxProps = {
  title: string;
  content: string;
  src: string; // url? 이미지 타입 변경해야됨
  nickname: string;
  uploadedDate: string; // 어떤 타입으로 받아오는지 보고 변경해야됨
  likeCount: number;
  commentCount: number;
};

const StyledFeedBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid 1px var(--color-grey-2);
  height: auto;
  padding: 20px 20px;
  margin: 15px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  color: var(--color-grey-1);
  font-size: var(--font-size-sm-1);

  p {
    margin: 0 3px;
  }
`;

const Nickname = styled.p`
  color: var(--color-black: #343434);
`;

const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

const Title = styled.p`
  color: var(--color-green-main);
  font-size: var(--font-size-md-2);
  font-weight: var(--font-weight-bold);
`;

const Content = styled.pre`
  margin: 20px 0 12px 0;
  color: var(--color-grey-1);
  width: 100%;
  white-space: pre-wrap;
  line-height: 1.4;
  font-size: var(--font-size-ft-1);
`;

const FeedBox: React.FC<FeedBoxProps> = ({
  title,
  content,
  src,
  nickname,
  uploadedDate,
  likeCount,
  commentCount,
}) => (
  <StyledFeedBox>
    <TitleContainer>
      <Title>{title}</Title>
      <LikeAndCommentCount likeCount={likeCount} commentCount={commentCount} />
    </TitleContainer>
    <Content>{content}</Content>
    <Hr />
    <ProfileContainer>
      <ProfileImg src={src} alt="프로필 이미지" />
      <Nickname>{nickname}</Nickname>
      <p>|</p>
      <p>{uploadedDate}</p>
    </ProfileContainer>
  </StyledFeedBox>
);

export default FeedBox;
