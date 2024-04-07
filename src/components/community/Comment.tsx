import styled from 'styled-components';

type CommentProps = {
  text?: string;
  profileImg: string;
  nickname: string;
  date: string; //string 맞는지 확인
};

const StyledComment = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
  border: 1px solid var(--color-grey-2);

  margin-top: 30px;
  height: auto;
  width: auto;
  font-size: var(--font-size-md-1);
  padding: 5px 0 5px 15px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const Nickname = styled.p`

`

const UploadedDate = styled.p`
font-size: var(--font-size-ft-1);
color: var(--color-grey-1);
`

const Content = styled.div`
line-height: 1.2;
`;

const Info = styled.div`
margin-top: 20px;ㅑ
display: flex;
flex-direction: row;
`

const Comment: React.FC<CommentProps> = ({
  text,
  profileImg, 
  nickname,
  date,
}) => (
  <StyledComment>
      <img src={profileImg} alt="댓글 프로필 사진" />
    <div>
      <Info>
      <Nickname>{nickname}</Nickname>
      <UploadedDate>{date}</UploadedDate>
      </Info>
      <Content>{text}</Content>
    </div>
  </StyledComment>
);

export default Comment;
