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
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 30px;
  margin-top: 30px;
  height: auto;
  width: auto;
  font-size: 14px;
  padding: 5px 0 5px 15px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const Content = styled.div`
`;

const Comment: React.FC<CommentProps> = ({
  text,
  profileImg,
  nickname,
  date,
}) => (
  <StyledComment>
      <img src={profileImg} alt="댓글 프로필 사진" />
    <div>
      <div>
        <p>{nickname}</p>
        <p>{date}</p>
      </div>
      <Content>{text}</Content>
    </div>
  </StyledComment>
);

export default Comment;
