import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  LuMoreHorizontal,
  LuMoreVertical,
  LuPencil,
  LuTrash2,
} from 'react-icons/lu';
import Hr from './Hr';

type ActionButtonProps = {
  border?: string;
  direction?: string;
  borderRadius?: string;
  color?: string;
};

const StyledActionButton = styled.div<ActionButtonProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-2);
  height: 35px;
  width: 35px;
  margin-left: 10px;
  border: ${({ border }) =>
    border === 'default' ? 'var(--color-grey-2) solid 1px;' : `${border}`};
  position: relative;
`;

const StyledIconHorizontal = styled(LuMoreHorizontal)`
  font-size: 24px;
`;

const StyledIconVertical = styled(LuMoreVertical)`
  font-size: 24px;
`;

const OptionButtons = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  border: var(--color-grey-2) 1px solid;
  background-color: var(--color-white);
  z-index: 1;
  p {
    color: var();
    display: inline-block;
    width: 50px;
  }
`;

const OptionItem = styled.div<ActionButtonProps>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: ${({ color }) => color && `${color};`};
  border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius};`};
`;

const ActionButton: React.FC<ActionButtonProps> = ({
  border,
  direction,
  borderRadius,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  /* 외부 클릭 시 닫히도록하는 이벤트 핸들러*/
  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledActionButton border={border} onClick={handleClick} ref={buttonRef}>
      {direction === 'vertical' ? (
        <StyledIconVertical />
      ) : (
        <StyledIconHorizontal />
      )}
      {isClicked && (
        <OptionButtons style={{ borderRadius }}>
          <OptionItem color="var(--color-grey-1)">
            <p>수정</p>
            <LuPencil />
          </OptionItem>
          <Hr />
          <OptionItem color="var(--color-red)">
            <p>삭제</p>
            <LuTrash2 />
          </OptionItem>
        </OptionButtons>
      )}
    </StyledActionButton>
  );
};

export default ActionButton;