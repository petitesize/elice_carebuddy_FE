import styled from 'styled-components';

type SuggestedMemberProps = {
  imgSrc: string, 
  nickname: string, 
  introduction: string
}

const StyledSuggestedCommunity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 20px 0;

  p {
    margin: 7px 0;
  }
`;

const ProfileImg = styled.img`

`
const Nickname = styled.p`

`
const Introduction = styled.p`

`



const SuggestedMember: React.FC<SuggestedMemberProps> = ({ imgSrc, nickname, introduction }) => (
  <StyledSuggestedCommunity>
    <ProfileImg src={imgSrc}>{imgSrc}</ProfileImg>
    <Nickname>{nickname}</Nickname>
    <Introduction>{introduction}명의 멤버</Introduction>
  </StyledSuggestedCommunity>
);

export default SuggestedMember;


