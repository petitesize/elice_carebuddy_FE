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
color: #7d7d7d;
font-size: 14px;
margin: 30px 0 0 0;
`
const Introduction = styled.p`
color: #7d7d7d;
font-size: 13px;

`

const SuggestedMember: React.FC<SuggestedMemberProps> = ({ src, nickname, introduction }) => (
  <StyledSuggestedMember>
    <ProfileImg src={src} />
    <Nickname>{nickname}</Nickname>
    <Introduction>{introduction}</Introduction>
  </StyledSuggestedMember>
);

export default SuggestedMember;


