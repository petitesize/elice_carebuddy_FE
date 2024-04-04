import styled from 'styled-components';
import LikeAndCommentNum from './LikeAndCommentNum';

type FeedBoxProps = {
  title: String,
  content: String, 
  src: string, // url? 이미지 타입 변경해야됨
  nickname: String,
  uploadedDate: String, // 어떤 타입으로 받아오는지 보고 변경해야됨
};

const StyledFeedBox = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
border: solid 1px #cecece;
height: 140px;

padding: 20px 20px;
`;

const TitleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

const ProfileContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
color: #7d7d7d;
font-size: 14px;
`

const ProfileImg = styled.img`
height: 25px;
width: 25px;
border-radius: 50%;
`

const Title = styled.p`
color: #6D987A;
font-weight: 500;
`

const Content = styled.pre`
color: #7d7d7d;
font-size: 14px;
width: 100%;
white-space: pre-wrap;
line-height: 1.2rem;
`

const FeedBox: React.FC<FeedBoxProps> = ({ title, content, src, nickname, uploadedDate  }) => (
  <StyledFeedBox>
    <TitleContainer>
    <Title>{title}</Title>
    <LikeAndCommentNum likeCount={0} commentCount={0}/>
    </TitleContainer>
    <Content>{content}</Content>
    <hr/>
    <ProfileContainer>
    <ProfileImg src={src} alt="프로필 이미지" />
    <p>{nickname}</p>
    <p>|</p>
    <p>{uploadedDate}</p>
    </ProfileContainer>
  </StyledFeedBox>
);

export default FeedBox;
