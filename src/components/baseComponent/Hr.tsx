import React from 'react';
import styled from 'styled-components';

const StyledHr = styled.hr`
  border-top: 0.5px solid var(--color-grey-2);
  width: 100%;
  margin: 0 0;
`;

const Hr: React.FC = () => {
  return <StyledHr />;
};

export default Hr;