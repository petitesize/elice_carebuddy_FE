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
    font-weight: var(--font-weight-bold);
  }
`;

const Name = styled.p`
font-size: var(--font-size-md-2);
font-weight: 400;
`

const Introduction = styled.p`
color: var(--color-grey-1);
font-size: var(--font-size-md-1);
line-height: 1.2rem;
`

const MemberCount = styled.p`
color: #7d7d7d;
font-size: var(--font-size-ft-1);
`

const SuggestedCommunity: React.FC<SuggestedCommunityProps> = ({ name, introduction, memberCount }) => (
  <StyledSuggestedCommunity>
    <Name>{name}</Name>
    <Introduction>{introduction}</Introduction>
    <MemberCount>{memberCount}명의 멤버</MemberCount>
  </StyledSuggestedCommunity>
);

export default SuggestedCommunity;


