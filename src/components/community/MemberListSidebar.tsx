import styled from 'styled-components';

type MemberListSidebarProps = {
  src: string;
  nickname: string;
  introduction: string;
};

const StyledMemberListSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  padding: 20px 0;

  p {
    margin: 13px 0 0 0;
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100px;
`;
const Nickname = styled.p`
  color: var(--color-grey-1);
  font-size: var(--font-size-md-1);
  margin: 30px 0 0 0;
`;
const Introduction = styled.p`
  color: var(--color-grey-1);
  font-size: var(--font-size-ft-1);
  line-height: 1.2rem;
`;

const MemberListSidebar: React.FC<MemberListSidebarProps> = ({
  src,
  nickname,
  introduction,
}) => (
  <StyledMemberListSidebar>
    <ProfileImg src={src} />
    <Nickname>{nickname}</Nickname>
    <Introduction>{introduction}</Introduction>
  </StyledMemberListSidebar>
);

export default MemberListSidebar;
