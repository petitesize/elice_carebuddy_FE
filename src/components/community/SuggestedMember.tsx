import styled from 'styled-components';

type SuggestedMemberProps = {
  src: string, 
  nickname: string, 
  introduction: string
}

const StyledSuggestedMember = styled.div`
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
`
const Nickname = styled.p`
color: var(--color-grey-1);
font-size: var(--font-size-md-1);
margin: 30px 0 0 0;
`
const Introduction = styled.p`
color: var(--color-grey-1);
font-size: var(--font-size-ft-1);
line-height: 1.2rem;

`

const SuggestedMember: React.FC<SuggestedMemberProps> = ({ src, nickname, introduction }) => (
  <StyledSuggestedMember>
    <ProfileImg src={src} />
    <Nickname>{nickname}</Nickname>
    <Introduction>{introduction}</Introduction>
  </StyledSuggestedMember>
);

export default SuggestedMember;


