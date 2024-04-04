import styled from 'styled-components';

type SuggestedCommunityProps = {
  name: String, 
  introduction: String, 
  memberCount: String
}

const StyledSuggestedCommunity = styled.div`

`;

const SuggestedCommunity: React.FC<SuggestedCommunityProps> = ({ name, introduction, memberCount }) => (
  <StyledSuggestedCommunity>
    <p>{name}</p>
    <p>{introduction}</p>
    <p>{memberCount}명의 멤버</p>
  </StyledSuggestedCommunity>
);

export default SuggestedCommunity;


