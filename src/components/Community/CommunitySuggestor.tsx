import styled from 'styled-components';
import SuggestedCommunity from './SuggestedCommunity';

const StyledCommunitySuggestor = styled.div`
border-radius: 10px;
border: solid 1px #343434;
// height: 200px;
height: auto;
width: 100%;
`;

const CommunitySuggestor= ({ }) => (
  <StyledCommunitySuggestor>
    <p>추천 커뮤니티</p>
    <br/>
    <SuggestedCommunity name="커뮤니티1" introduction="소개" memberCount={String(1)} />
    <hr/>
    <SuggestedCommunity name="커뮤니티1" introduction="소개" memberCount={String(1)} />
    <hr/>
    <SuggestedCommunity name="커뮤니티1" introduction="소개" memberCount={String(1)} />
  </StyledCommunitySuggestor>
);

export default CommunitySuggestor;
