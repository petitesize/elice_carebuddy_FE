import React from 'react';
import styled from 'styled-components';
import Hr from '../baseComponent/Hr';

type SidePanelProps = {
  name: string;
  array: React.ReactNode[];
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

const SidePanel: React.FC<SidePanelProps> = ({ name, array }) => (
  <StyledSidePanelContainer>
    <P>{name}</P>
    {array.map((component, index) => (
      <div key={index}>
        {component}
        {index !== array.length - 1 && <Hr />}
      </div>
    ))}
  </StyledSidePanelContainer>
);

export default SidePanel;
