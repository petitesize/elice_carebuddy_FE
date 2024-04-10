import React, { useState } from 'react';
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
  onEdit?: () => void; // 수정 버튼 클릭 이벤트 핸들러
  onDelete?: () => void; // 삭제 버튼 클릭 이벤트 핸들러
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
  onEdit,
  onDelete,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <StyledActionButton border={border} onClick={handleClick} ref={buttonRef}>
      {direction === 'vertical' ? (
        <StyledIconVertical />
      ) : (
        <StyledIconHorizontal />
      )}
      {isClicked && (
        <OptionButtons style={{ borderRadius }}>
          <OptionItem color="var(--color-grey-1)" onClick={handleEditClick}>
            <p>수정</p>
            <LuPencil />
          </OptionItem>
          <Hr />
          <OptionItem color="var(--color-red)" onClick={handleDeleteClick}>
            <p>삭제</p>
            <LuTrash2 />
          </OptionItem>
        </OptionButtons>
      )}
    </StyledActionButton>
  );
};

export default ActionButton;
