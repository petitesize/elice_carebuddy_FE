import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  redirectUrl?: string;
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  margin-bottom: 10px;
  padding: 0 0 1px 0;
  border: none;
  border-bottom: solid 1px;
  background-color: var(--color-white);
  font-size: var(--font-size-ft-1);
  font-weight: var(--font-weight-regular);
  cursor: pointer;
`;

const LinkButton: React.FC<ButtonProps> = ({ text, redirectUrl, onClick }) => {
  const handleClick = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick} >
      {text}
    </StyledButton>
  );
};

export default LinkButton;
