import styled from 'styled-components';

type SuggestedCommunityProps = {
  name: string, 
  introduction: string, 
  memberCount: string
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

const Name = styled.p`
color: #343434;
font-size: 14px;
font-weight: 400;
`

const Introduction = styled.p`
color: #7d7d7d;
font-size: 12px;
line-height: 1.2rem;
`

const MemberCount = styled.p`
color: #7d7d7d;
font-size: 11px;
`

const SuggestedCommunity: React.FC<SuggestedCommunityProps> = ({ name, introduction, memberCount }) => (
  <StyledSuggestedCommunity>
    <Name>{name}</Name>
    <Introduction>{introduction}</Introduction>
    <MemberCount>{memberCount}명의 멤버</MemberCount>
  </StyledSuggestedCommunity>
);

export default SuggestedCommunity;


