import styled from 'styled-components';
import Hr from '../baseComponent/Hr';
import { Link } from 'react-router-dom';

import formatDate from '../../utils/formatDate';

type FeedBoxProps = {
  postId: string; 
  title: string;
  content: string;
  profile: string; // url? 이미지 타입 변경해야됨
  nickname: string;
  uploadedDate: string;
  likeCount: number;
  commentCount: number;
  src?:string;
};

const StyledFeedBox = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid 1px var(--color-grey-2);
  height: 150px;
  padding: 25px 20px;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
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
  min-height: 60px;
`;

const MoreSpan = styled.span`
color: #0069E4;
font-size: var(--font-size-sm-1);
`;

const FeedBox: React.FC<FeedBoxProps> = ({
  title,
  content,
  profile,
  nickname,
  uploadedDate,
  postId
}) => {
  const processedContent = content.split('. ').slice(0, 2).join('. '); // 두 문장만 보여주기
  const formattedDate = formatDate({ rowDate: uploadedDate }); // 날짜만 보여주기(시간 x)

  return (
    <StyledFeedBox to={`/post/${postId}`}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Content>
        {processedContent}
        <MoreSpan>... 더보기</ MoreSpan>
      </Content>
      <Hr />
      <ProfileContainer>
        <ProfileImg src={profile} alt="프로필 이미지" />
        <Nickname>{nickname}</Nickname>
        <p>|</p>
        <p>{formattedDate}</p>
      </ProfileContainer>
    </StyledFeedBox>
  );
};

export default FeedBox;
