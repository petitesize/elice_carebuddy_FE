import styled from 'styled-components'; 

type SidePanelProps = {
  name: string,
  space1: React.ReactNode,
  space2: React.ReactNode,
  space3: React.ReactNode,
}

const StyledSidePanelContainer = styled.div`
border-radius: 10px;
border: solid 1px var(--color-grey-2);
height: auto;
width: 100%;
padding: 20px;
// background-color: aqua;
font-size: var(--font-size-md-2);
box-sizing: border-box; 
`;

const Hr = styled.hr`
  border: none;
  border-top: 1px solid var(--color-grey-2);
`;

const SidePanel: React.FC<SidePanelProps> = ({ name, space1, space2, space3 }) => (
  <StyledSidePanelContainer>
    <p>{name}</p>
    {space1}
    <Hr />
    {space2}
    <Hr />
    {space3}
  </StyledSidePanelContainer>
); // 나중에 들어가는 요소 세 개 튜플로 바꿔서 map으로 펼칠 수 있다면 좋을 듯

export default SidePanel;