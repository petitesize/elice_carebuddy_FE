import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const StyledButton = styled.button`
  font-size: var(--font-size-ft-1);
  margin: 0 5px 10px 5px;
  border: none;
  border-bottom: solid 1px;
  cursor: pointer;
  background-color: var(--color-white);
`;

const LinkButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text} </StyledButton>;
};

export default LinkButton;
