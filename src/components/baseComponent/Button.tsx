import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  shape?: 'round' | 'square';
  fontSize?: keyof typeof fontSizeMap;
  margin?: string;
  padding?: string;
}

const fontSizeMap = {
  'sm-1': 'var(--font-size-sm-1)', // 12
  'ft-1': 'var(--font-size-ft-1)', // 14
  'md-1': 'var(--font-size-md-1)', // 16
  'md-2': 'var(--font-size-md-2)', // 18
  'hd-1': 'var(--font-size-hd-1)', // 20
  'hd-2': 'var(--font-size-hd-2)', // 22
  'lg-1': 'var(--font-size-lg-1)', // 26
  'lg-2': 'var(--font-size-lg-2)', // 32
};

const ButtonElement = styled.button<ButtonProps>`
  height: 36px;
  width: auto;
  background-color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--color-green-main)'
      : 'var(--color-white)'};
  color: ${(props) =>
    props.variant === 'primary'
      ? 'var(--color-white)'
      : 'var(--color-black-main)'};
  font-size: ${(props) =>
    props.fontSize
      ? fontSizeMap[props.fontSize]
      : 'var(--font-size-md-1)'}; // Default font size: var(--font-size-md-1)
  border: ${(props) =>
    props.variant === 'secondary' ? '1px solid var(--color-grey-2)' : 'none'};
  border-radius: ${(props) => (props.shape === 'round' ? '20px' : '0')};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) =>
    props.margin || '0'}; // margin prop 값 또는 기본값 '0' 사용
  padding: ${(props) => props.padding || '0'};

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? '#567760' : '#d4d4d4'};
    color: ${(props) =>
      props.variant === 'primary'
        ? 'var(--color-white)'
        : 'var(--color-grey-1)'};
  }
`;

const Text = styled.div`
  font-family: 'Pretendard-Regular', sans-serif;
`;

const UIButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  shape,
  fontSize,
  margin,
  padding,
}) => {
  const actualVariant = variant || 'secondary'; // variant가 없는 경우에는 'secondary'로 설정
  const actualShape = shape || 'square'; // shape가 없는 경우에는 'square'로 설정

  return (
    <ButtonElement
      onClick={onClick}
      variant={actualVariant}
      shape={actualShape}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      <Text>{children}</Text>
    </ButtonElement>
  );
};

export default UIButton;
