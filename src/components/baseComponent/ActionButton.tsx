import React, { useState } from 'react';
import styled from 'styled-components';
import {
  LuMoreHorizontal,
  LuMoreVertical,
  LuPencil,
  LuTrash2,
} from 'react-icons/lu';

type ActionButtonProps = {
  border?: string;
  direction?: string;
  borderRadius?: string;
  color?: string;
};

const StyledActionButton = styled.div<ActionButtonProps>`
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

p{
  color: var()
  display: inline-block;
  width: 50px;
}
`;

const OptionItem = styled.div<ActionButtonProps>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: ${({ color }) => color && `${color};`}
  border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius};`}
`;

const Hr = styled.hr`
  border-top: 0.5px solid var(--color-grey-2);
  width: 100%;
  margin: 0 0;
`;

const ActionButton: React.FC<ActionButtonProps> = ({
  border,
  direction,
  borderRadius,
}) => {
  direction = 'horizontal'; // 세로로 사용하려면 direction="vertical", 기본은 가로
  border = 'default'; // border 없애려면 border="none";
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <StyledActionButton border={border} onClick={handleClick}>
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
