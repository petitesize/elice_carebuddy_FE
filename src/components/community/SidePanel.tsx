import React from 'react';
import styled from 'styled-components';

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

const Hr = styled.hr`
  border: none;
  border-top: 1px solid var(--color-grey-2);
`;

const SidePanel: React.FC<SidePanelProps> = ({ name, array }) => (
  <StyledSidePanelContainer>
    <P>{name}</P>
    {array.map((Component, index) => (
      <div key={index}>
        {Component}
        {index !== array.length -1 && <Hr />}
      </div>
    ))}
  </StyledSidePanelContainer>
);

export default SidePanel;
