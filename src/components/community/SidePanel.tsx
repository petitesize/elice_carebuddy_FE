import React from 'react';
import styled from 'styled-components';
import Hr from '../baseComponent/Hr';

type SidePanelProps = {
  groupId: string;
  name: string;
  array: React.ReactNode[];
  groupId: string;
};

const StyledSidePanelContainer = styled.div`
  border-radius: 10px;
  border: solid 1px var(--color-grey-2);
  height: auto;
  width: 100%;
  padding: 20px;
  font-size: var(--font-size-md-2);
  box-sizing: border-box;
`;

const P = styled.p`
  font-weight: var(--font-weight-bold);
`;

const PanelItem = styled.div`
  cursor: pointer;
`;

const SidePanel: React.FC<SidePanelProps> = ({ name, array }) => (
  <StyledSidePanelContainer>
    <P>{name}</P>
    {array.map((component, index ) => (
      <PanelItem key={index}> 
        {component}
        {index !== array.length - 1 && <Hr />}
      </PanelItem>
    ))}
  </StyledSidePanelContainer>
);

export default SidePanel;
