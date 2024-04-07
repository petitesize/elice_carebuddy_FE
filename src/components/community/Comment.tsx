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
  margin-top: 12px;
  height: auto;
  width: auto;
  font-size: var(--font-size-md-1);
  padding: 5px 0 5px 0px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const Nickname = styled.p`
  font-size: var(--font-size-md-1);
  margin-right: 5px;
`;

const UploadedDate = styled.p`
  font-size: var(--font-size-ft-1);
  color: var(--color-grey-1);
`;

const Content = styled.div`
  line-height: 1.3;
  width: 700px;
  font-size: var(--font-size-ft-1);
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  margin-right: 10px;
`;

const CommentOption = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  p {
    font-size: var(--font-size-ft-1);
    margin: 0 5px 10px 5px;
    padding: 0 0 2px;
    border-bottom: solid 1px;
  }
`;

const CommentOptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const Comment: React.FC<CommentProps> = ({
  text,
  profileImg,
  nickname,
  date,
}) => (
  <StyledComment>
    <ProfileImg src={profileImg} alt="댓글 프로필 사진" />
    <div>
      <Info>
        <Nickname>{nickname}</Nickname>
        <UploadedDate>{date}</UploadedDate>
      </Info>
      <Content>{text}</Content>
      <CommentOptionWrapper>
      <CommentOption>
        <p>수정</p>
        <p>삭제</p>
      </CommentOption>
      </CommentOptionWrapper>
    </div>
  </StyledComment>
);

export default Comment;
